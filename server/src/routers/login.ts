import {Router, Request, Response} from 'express'
import checkLogin from '../middlewares/checkLogin.js'
import generateJwt from '../middlewares/generateJwt.js'

const router : Router = Router()

router.post('/',[checkLogin, generateJwt], async (req : Request, res : Response) => {
    try {
        return res.send({ token: res.locals.jwt, admin: res.locals.admin })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router