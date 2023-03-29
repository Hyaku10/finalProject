import {Router, Request, Response} from 'express'
import {addProduct} from '../controllers/product.js'
import authenticateToken from '../middlewares/authenticateToken.js'

const router : Router = Router()

router.post('/',[authenticateToken] ,async (req : Request, res : Response) => {
    try {
        if(res.locals.admin !== 'admin'){
            return res.status(403).send()
        }
        const {name, description, price, image_id} = req.body
        const doc = {
            name : name,
            description : description,
            price : price,
            image_id : image_id,
        }
        const product = await addProduct(doc)
        res.send()
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router