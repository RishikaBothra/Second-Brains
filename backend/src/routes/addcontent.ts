import express, { Request, Response } from "express";
import { z } from "zod";
import addcontentmodel from "../models";
import { userMiddleware } from "../middleware";

const addcontent = express.Router();
addcontent.use(express.json());

const contentSchema = z.object({
    link: z.string().url({ message: "Link must be a url" }),
    type: z.string().min(1, { message: "Type is required" }),
    title: z.string().min(1, { message: "Title is required" })
});

addcontent.post("/content", userMiddleware, async (req: Request, res: Response): Promise<void> => {

    const parsed = contentSchema.safeParse(req.body)

    if (!parsed.success) {
        res.status(400).send({
            message: "Invalid",

        });
        return;
    }
    const { link, type, title } = parsed.data;

    try {
        await addcontentmodel.create({
            link,
            type,
            title,
            userId: req.userId,
            tags: []
        });
        res.status(201).send({
            message: "content added successfully"
        });
        return;
    }
    catch (error) {
        res.status(500).send({
            message: "Internal server error"
        });
        return;
    }



});

export default addcontent;