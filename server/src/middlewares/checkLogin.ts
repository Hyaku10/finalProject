import pkg from 'bcryptjs';
import {findUserByEmail} from '../controllers/user.js'
import { NextFunction, Request, Response } from 'express';
const { compare } = pkg;

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user0: any = await findUserByEmail(req.body.email)
        const user = user0[0]
        if (!user){
            return res.status(404).send('email not registered')
        }
        const userData = {
            email : user.email,
            password : user.password,
            admin : user.admin
        }
        res.locals.user = userData
        if (res.locals.user.admin){
            res.locals.admin = 'admin'
            return next()
        }
        const isValid = await compare(req.body.password, res.locals.user.password)
        if (!isValid){
            res.locals.admin = 'logged_out'
            return res.status(401).send('username or password is incorrect')
        }
        res.locals.admin = 'user'
        return next()
    } catch (error) {
        return res.status(500).send(error)
    }
}