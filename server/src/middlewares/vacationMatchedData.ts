import { NextFunction, Request, Response } from "express"

export default async (req: Request, res: Response, next: NextFunction) => {
    for(const key in req.body){
        if(!['description', 'destination', 'image_id', 'start_date', 'finish_date', 'price'].includes(key)){
            return res.status(400).send(`invalid property ${key}`)
        }
    }
    next()
}