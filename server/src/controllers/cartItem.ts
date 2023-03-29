import IcartItem from '../interfaces/cartItem.js'
import CartItem from '../models/cartItems.js'
import { Document } from 'mongoose'
import mongoose from 'mongoose'

export const addCartItem = async (doc: any) : Promise<any> => {
    const cartItem = new CartItem(doc)
    return await cartItem.save()
}

export const allCartItems = async () => {
    try {
        return await CartItem.find()
    } catch (error) {
        console.log(error)
    }
}

export const findCartItem = async (id : string) => {
    try {
        return await CartItem.findById(id)
    } catch (error) {
        console.log(error)
    }
}

export const findCartItemByProduct = async (product : any) => {
    try {
        const validProductId = new mongoose.Types.ObjectId(product)
        return await CartItem.findById({'product' : validProductId})
    } catch (error) {
        console.log(error)
    }
}

export const deleteCartItem = async (id : any) => {
    try {
        return await CartItem.deleteOne({_id: id})
    } catch (error) {
        console.log(error)
    }
}