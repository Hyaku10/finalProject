import mongoose from "mongoose"
import Iorder from '../interfaces/order.js'

const order = new mongoose.Schema<Iorder>({
    user : mongoose.SchemaTypes.ObjectId,
    items : [{
        product : mongoose.SchemaTypes.ObjectId,
        amount : Number
    }],
    city : String,
    street : String,
    date : Date,
    price : Number
})

export default mongoose.model<Iorder>('order', order)