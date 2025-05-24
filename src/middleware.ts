import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const userMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers["authorization"];
  const JWT_SECRET = process.env.JWT_SECRET;
  try {
    const decoder = jwt.verify(header as string, JWT_SECRET as string);
    if (decoder) {
      req.userId = (decoder as jwt.JwtPayload).userId;
      next();

    }
    else {
      res.status(401).json({
        message: "Unauthorized User"
      });
    }
  }
  catch (error) {
    res.status(401).json({
      message: "Unauthorized User"
    });
  }
}


