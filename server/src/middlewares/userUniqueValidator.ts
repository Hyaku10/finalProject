import { NextFunction, Request, Response } from "express"
import users from '../models/users.js'

const getUsers = async() => {
    return await users.find()
}

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users: any = await getUsers()
        for (const user of users) {
            if(user.email == req.body.email){
                return res.status(409).send('email already registered')
            }
        }
        next()
    } catch (error) {
        return res.status(500)
    }
}