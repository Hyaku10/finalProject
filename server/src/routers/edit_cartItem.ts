import {Router, Request, Response} from 'express'
import { deleteCartItem, findCartItem, findCartItemByProduct } from '../controllers/cartItem.js'
import authenticateToken from '../middlewares/authenticateToken.js'
import mongoose from 'mongoose'
import IcartItem from '../interfaces/cartItem.js'

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
        const {product, amount} = req.body
        const userCart = user.cart
        if (!userCart.length){
            return res.send(null)
        }
        //edit and save
        for (const i of userCart){
            const cartItem = await findCartItem(i._id)
            const productId = await extractId(cartItem!.product)
            if(product == productId){
                cartItem!.amount = amount
                await cartItem!.save()
                return res.send(i)
            }
        }
        return res.send(user.cart)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

export default router