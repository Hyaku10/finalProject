import {Router, Request, Response} from 'express'
import { addCartItem } from '../controllers/cartItem.js'
import authenticateToken from '../middlewares/authenticateToken.js'
import { findCartItem } from '../controllers/cartItem.js'

const router : Router = Router()

const extractId = (mongoObjectId: any) => {
    const idString = mongoObjectId.toString();
    const id = idString.slice(idString.indexOf('"') + 1, idString.length);
    return id;
  }

router.post('/',[authenticateToken] ,async (req : Request, res : Response) => {
    try {
        const user = res.locals.user
        const {product, amount} = req.body
        const doc = {
            product: product,
            amount: amount
        }
        const oldCart = user.cart
        if (oldCart.length){
            for (const i of oldCart){
                const cartItem = await findCartItem(i._id)
                const productId = extractId(cartItem!.product)
                if(product == productId){
                    return res.send('item is already in cart')
                }
            }
        }
        const item = await addCartItem(doc)
        const newCart = oldCart.concat([item])
        user.cart = newCart
        await user.save()
        res.send(user)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router