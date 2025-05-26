import express, { Request, Response } from 'express';
import { userMiddleware } from '../middleware';
import addcontentmodel from '../models';
import{z} from"zod";

const deleteusercontent = express.Router();
deleteusercontent.use(express.json());

const deleteSchema = z.object({
    contentId:z.string().length(24, "Invalid content ID format")
});

deleteusercontent.delete("/deletecontent", userMiddleware, async (req: Request, res: Response): Promise<void> => {
    const parsed = deleteSchema.safeParse(req.body);
    if(!parsed.success){
        res.status(400).send({
            message:"Invalid request body",
        });
        return;
    }
    const {contentId} = parsed.data;

    try{
        const result = await addcontentmodel.findOneAndDelete({
            _id:contentId,
            userId:req.userId,

        });
        if(!result){
            res.status(404).send({
                message: "Content not found or you do not have permission to delete it",
            });
            return;
        }
        res.status(200).send({
            message: "Content deleted successfully",
        });
    }
    catch (error) {
        console.error("Error deleting content:", error);
        res.status(500).send({
            message: "Internal server error while deleting content",
        });
    }
})
export default deleteusercontent;