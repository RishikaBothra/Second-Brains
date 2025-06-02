import express, { Request, Response } from "express";
import linkModel from "../linkmodel";
import user from "../user";
import contentModel from "../models"; 

const getlink = express.Router();

getlink.get("/getlink/:shareLink", async (req: Request, res: Response):Promise<void> => {
  const hash = req.params.shareLink;
  try {
    const link = await linkModel.findOne({ hash });
    if (!link) {
    res.status(404).json({ message: "Invalid share link" });
    return;
    } 
    const content = await contentModel.find({ userId: link.userId });

    const userData = await user.findOne({ _id: link.userId });
    if (!userData) {
    res.status(404).json({ message: "User not found" });
    return;
    }

    res.status(200).json({
      username: userData.username,
      content
    });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
  return;
});

export default getlink;