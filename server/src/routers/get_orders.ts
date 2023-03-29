import {Router, Request, Response} from 'express'
import { findOrdersByUser } from '../controllers/order.js'
import { findProduct } from '../controllers/product.js'
import { findUserById } from '../controllers/user.js'
import authenticateToken from '../middlewares/authenticateToken.js'
import Iuser from '../interfaces/user.js'

const router : Router = Router()

interface InewOrder {
    user: Iuser;
    items: any[];
    city: string;
    street: string;
    date: Date;
    price: number;
}

router.get('/', [authenticateToken], async (req : Request, res : Response) => {
    try {
        const user = res.locals.user
        const id = user._id
        const newArr: any[] = []
        const allOrders = await findOrdersByUser(id)
        if (!allOrders){
            res.send([])
        }
        for (const i of allOrders!){
            const user = await findUserById(i.user)
            const order: InewOrder = {
                user : user,
                items : [],
                city: i.city,
                street: i.street,
                date: i.date,
                price: i.price
            }
            for (const item of i.items){
                const product = await findProduct(item.product)
                const newItem = {
                    product: product,
                    amount: item.amount
                }
                order.items.push(newItem)
            }
            newArr.push(order)
        }
        return res.send(newArr)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

export default router