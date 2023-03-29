import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import users from '../models/users.js'
import Iuser from '../interfaces/user.js'

const getUsers = async() => {
    return await users.find()
}

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.sendStatus(401)
        }
        const token = authHeader.split(' ')[1]
        if (!token) {
            return res.sendStatus(401)
        }
        const key = process.env.JWT_KEY
        if (!key) {
            return res.sendStatus(401)
        }
        jwt.verify(
            token,
            key,
            async (error, decoded: any) => {
                const { email } = decoded
                const users: Iuser[] = await getUsers()
                for (const user of users) {
                    if (user.email === email) {
                        res.locals.user = user
                        if (user.admin){
                            res.locals.admin = 'admin'
                            return next()
                        }
                        res.locals.admin = 'user'
                        return next()
                    }
                }
                res.locals.admin = 'logged_out'
                return next()
            }
        )
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}