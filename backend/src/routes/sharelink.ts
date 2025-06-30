import express, { Request, Response } from 'express';
import { userMiddleware } from '../middleware';
import linkModel from '../linkmodel';

const sharelink = express.Router();
sharelink.use(express.json());

function randomHash(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

sharelink.post("/share", userMiddleware, async (req: Request, res: Response): Promise<void> => {
    const { link } = req.body;

    try {
        if (link) {
            const existingLink = await linkModel.findOne({ userId: req.userId, link });
            if (existingLink) {
                res.json({ hash: existingLink.hash });
                return;
            }
            const hash = randomHash(10);
            await linkModel.create({
                userId: req.userId,
                link,
                hash,
            });
            res.status(201).json({
                message: "Link shared successfully",
                hash,
            });
            return;
        }

        await linkModel.deleteOne({ userId: req.userId });
        res.status(200).send({
            message: "Link deleted successfully",
        });
    } catch (error) {
        console.error("Error sharing link:", error);
        res.status(500).send({
            message: "Internal server error while sharing link",
        });
    }
});

export default sharelink;


