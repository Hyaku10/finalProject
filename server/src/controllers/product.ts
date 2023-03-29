import Iproduct from '../interfaces/product.js'
import Product from '../models/products.js'
import { Document } from 'mongoose'

export const addProduct = async (doc : Iproduct) : Promise<Iproduct> => {
    const product = new Product(doc)
    return await product.save()
}

export const findProduct = async (id : any) : Promise<Iproduct> => {
    try {
        const product = await Product.findById(id)
        return product!
    } catch (error) {
        console.log(error)
        throw new Error(`Error finding product with id ${id}`)
    }
}

export const allProducts = async () => {
    try {
        return await Product.find()
    } catch (error) {
        console.log(error)
    }
}