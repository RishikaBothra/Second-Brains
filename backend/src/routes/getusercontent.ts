import express, { Request, Response } from 'express';
import addcontentmodel from '../models';
import { userMiddleware } from '../middleware';

const getusercontent = express.Router();
getusercontent.use(express.json())

getusercontent.get("/getcontent", userMiddleware, async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.userId;//fetching the content of the user
        const content = await addcontentmodel.find({ userId });
        // The `populate` function is used to include additional details from the referenced `userId`.
        // For example, it will fetch the username linked to the userId.
        res.status(200).json(
            content.map(item => ({
                _id: item._id,
                link: item.link,
                type: item.type,
                title: item.title,
                description: item.description
            }))
        );
    } catch (error) {
        res.status(500).json({
            message: "Internal server error while fetching content",
        });
    }
});
export default getusercontent;
