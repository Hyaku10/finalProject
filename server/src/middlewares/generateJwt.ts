import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body
        const key : any = process.env.JWT_KEY
        jwt.sign(
            {email},
            key,
            (error: any, token: any) => {
                if(error){
                    console.log(error)
                    return res.sendStatus(500)
                }
                res.locals.jwt = token
                next()
            }
        )
    } catch (error) {
        return res.status(500).send(error)
    }
}
