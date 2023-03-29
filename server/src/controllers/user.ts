import Iuser from '../interfaces/user.js'
import User from '../models/users.js'
import { Document } from 'mongoose'

export const addUser = async (doc : Iuser) : Promise<Document<unknown, any, Iuser>> => {
    const user = new User(doc)
    return await user.save()
}

export const getUsers = async () => {
    try {
        return await User.find()
    } catch (error) {
        console.log(error)
    }
}

export const findUserByEmail = async (email: string) => {
    try {
        return await User.find({email : email})
    } catch (error) {
        console.log(error)
    }
}

export const findUserById = async (id : any) : Promise<Iuser> => {
    try {
        const user = await User.findById(id)
        return user!
    } catch (error) {
        console.log(error)
        throw new Error(`Error finding user with id ${id}`)
    }
}