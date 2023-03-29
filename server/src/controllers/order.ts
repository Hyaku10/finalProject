import Iorder from '../interfaces/order.js'
import Order from '../models/order.js'
import mongoose from 'mongoose'

export const addOrder = async (doc: any) : Promise<any> => {
    const order = new Order(doc)
    return await order.save()
}

export const allOrders = async () => {
    try {
        return await Order.find()
    } catch (error) {
        console.log(error)
    }
}

export const findOrder = async (userId : string) => {
    try {
        return await Order.findById({'user' : userId})
    } catch (error) {
        console.log(error)
    }
}

export const findOrdersByUser = async (user : any) => {
    try {
        const validProductId = new mongoose.Types.ObjectId(user)
        return await Order.find({'user' : validProductId})
    } catch (error) {
        console.log(error)
    }
}