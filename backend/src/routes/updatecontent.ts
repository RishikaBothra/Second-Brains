import express, { Request, Response } from "express";
import { z } from "zod";
import addcontentmodel from "../models";
import { userMiddleware } from "../middleware";

const updateContentRoute = express.Router();
updateContentRoute.use(express.json());

const updateContentSchema = z.object({
    contentId: z.string().length(24, "Invalid content ID format"),
    link: z.string().url({ message: "Link must be a valid URL" }).optional(),
    type: z.enum(['article', 'video', 'podcast', 'book', 'other']).optional(),
    title: z.string().min(1, { message: "Title is required" }).optional()
});

updateContentRoute.put("/updatecontent", userMiddleware, async (req, res) => {
    const parsed = updateContentSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({
            message: "Invalid request body",
            errors: parsed.error.errors
        });
        return;
    }
    const { contentId, ...updateFields } = parsed.data;
    try {
        const updatedContent = await addcontentmodel.findOneAndUpdate(
            { _id: contentId, userId: req.userId },
            updateFields,
            { new: true }
        );
        if (!updatedContent) {
            res.status(404).json({ message: "Content not found or you are not authorized to update it" });
            return;
        }
        res.status(200).json({
            message: "Content updated successfully",
            content: updatedContent
        });
    } catch (error) {
        console.error("Error updating content:", error);
        res.status(500).json({ message: "Internal server error while updating content" });
    }
});
 
export default updateContentRoute;
