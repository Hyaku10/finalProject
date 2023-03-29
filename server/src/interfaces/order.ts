import Iproduct from './product.js'
import Iuser from './user.js'
export default interface Iorder {
    user : Iuser,
    items: [{
        product : Iproduct,
        amount : number
    }],
    city: string,
    street: string,
    date: Date,
    price: number
}