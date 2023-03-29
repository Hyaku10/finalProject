import {Router, Request, Response} from 'express'
import { deleteCartItem, findCartItem, findCartItemByProduct } from '../controllers/cartItem.js'
import authenticateToken from '../middlewares/authenticateToken.js'
import mongoose from 'mongoose'

const router : Router = Router()

const extractId = (mongoObjectId: any) => {
    const idString = mongoObjectId.toString();
    const id = idString.slice(idString.indexOf('"') + 1, idString.length);
    return id;
  }

router.post('/', [authenticateToken], async (req : Request, res : Response) => {
    try {
        //setup
        const user = res.locals.user
        const {product} = req.body
        const userCart = user.cart
        const newCart = []
        if (!userCart.length){
            return res.send(null)
        }
        //delete references
        for (const i of userCart){
            const cartItem = await findCartItem(i._id)
            const productId = await extractId(cartItem!.product)
            if(product !== productId){
                const remainingCartItem = await extractId(cartItem!._id)
                newCart.push(remainingCartItem)
            }else{
                await deleteCartItem(i!._id)
            }
        }
        //delete cartItem
        user.cart = newCart
        await user.save()
        return res.send(newCart)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

export default router