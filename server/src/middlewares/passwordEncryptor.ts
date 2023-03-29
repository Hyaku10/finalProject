import pkg from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
const {genSalt, hash} = pkg;

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const salt = await genSalt()
        const hashed = await hash(req.body.password, salt)
        res.locals.password = hashed
        next()
    } catch (error) {
        return res.status(500).send(error)
    }
}