import mongoose from "mongoose"
import Iuser from '../interfaces/user.js'

const user = new mongoose.Schema<Iuser>({
    first_name : String,
    last_name : String,
    email : String,
    password : String,
    city : String,
    street :  String,
    admin : Boolean,
    cart : [mongoose.SchemaTypes.ObjectId]
})

export default mongoose.model<Iuser>('user', user)
