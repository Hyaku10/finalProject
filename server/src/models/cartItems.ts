import mongoose from "mongoose"
import IcartItem from '../interfaces/cartItem.js'

const cartItem = new mongoose.Schema<IcartItem>({
    product : [mongoose.SchemaTypes.ObjectId],
    amount : Number,
})

export default mongoose.model<IcartItem>('cartItem', cartItem)