import { NextFunction, Request, Response } from "express"

export default async (req: Request, res: Response, next: NextFunction) => {
    for(const key in req.body){
        if(!['first_name', 'last_name', 'email', 'password', 'city', 'street', 'admin', 'cart'].includes(key)){
            return res.status(400).send(`invalid property ${key}`)
        }
    }
    next()
}