import mongoose from "mongoose"
import Iproduct from '../interfaces/product.js'

const product = new mongoose.Schema<Iproduct>({
    name : String,
    description : String,
    price : Number,
    image_id : String,
})

export default mongoose.model<Iproduct>('product', product)