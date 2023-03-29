import {Router, Request, Response} from 'express'
import authenticateToken from '../middlewares/authenticateToken.js'
import product from '../models/products.js'

const router : Router = Router()

router.post('/' ,[authenticateToken],async (req : Request, res : Response) => {
    try {
        if(res.locals.admin !== 'admin'){
            return res.status(403).send()
        }
        const {name, target, value} = req.body
        const thisProduct = await product.findOne({'name' : name})
        if(thisProduct === null){
            res.status(500).send()
        }
        switch (target) {
            case 'name':
                thisProduct!.name = value
                break;
            case 'description':
                thisProduct!.description = value
                break;
            case 'price':
                thisProduct!.price = value
                break;
            case 'image_id':
                thisProduct!.image_id = value
                break;
            default:
                break;
        }
        await thisProduct?.save()
        res.send()
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router