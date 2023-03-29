import IcartItem from './cartItem'
export default interface Iuser {
    first_name : string,
    last_name : string,
    email : string,
    password : string,
    city : string,
    street :  string,
    admin : boolean,
    cart : IcartItem[]
}