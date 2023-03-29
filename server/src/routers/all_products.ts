import {Router, Request, Response} from 'express'
import { allProducts } from '../controllers/product.js'

const router : Router = Router()

router.get('/', async (req : Request, res : Response) => {
    try {
        const response = await allProducts()
        if (response?.length === 0){
            return res.sendStatus(404)
        }
        return res.send(response)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

export default router