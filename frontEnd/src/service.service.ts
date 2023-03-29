import {  Injectable } from '@angular/core'
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {}

  getProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/all_products`)
      return res.data
    } catch (error) {
      window.alert('alert')
      console.log(error)
    }
  }

  registerUser = async (obj: any) => {
    try {
      const res = await axios.post(`http://localhost:3003/add_user`, obj)
      return res
    } catch (error: any) {
      if(error.response.status == 409){
        return window.alert('Email already registered')
      }
      if(error.response.status == 403){
        return window.alert('password must be between 8 and 14 characters long, have both upper and lower case letters, at least one digit and no spaces.')
      }
      window.alert('registration failed')
      return error
    }
  }

  login = async (obj: any) => {
    try {
      const res = await axios.post(`http://localhost:3003/login`, obj)
      return res.data
    } catch (error) {
      window.alert('login failed')
      console.log(error)
    }
  }

  deleteProduct = async(name: string) => {
    try {
      const obj = {name: name}
      const jwt = localStorage.getItem('token')
      const res = await axios.post(`http://localhost:3003/delete_product`, obj, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
      })
      return res.data
    } catch (error) {
      window.alert('deletion failed')
      console.log(error)
    }
  }

  editProduct = async(name: string, target: string, value: string|number) => {
    try {
      const obj = {name: name,
                   target: target,
                   value: value}
      const jwt = localStorage.getItem('token')
      const res = await axios.post(`http://localhost:3003/edit_product`, obj, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
      })
      return res.data
    } catch (error) {
      window.alert('edit failed')
      console.log(error)
    }
  }

  getCartItems = async () => {
    try {
      const jwt = localStorage.getItem('token')
      const response = await axios.get(`http://localhost:3003/all_cartItems`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
      })
      const cart = response.data
      return cart
    } catch (error) {
      console.log(error)
      return []
    }
  }

  addCartItem = async (obj :any) => {
    try {
      const jwt = localStorage.getItem('token')
      const response = await axios.post(`http://localhost:3003/add_cartItem`,obj, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
      })
      const item = response.data
      window.alert('added to cart')
      return item
    } catch (error) {
      console.log(error)
      return []
    }
  }

  deleteCartItem = async (obj :any) => {
    try {
      const jwt = localStorage.getItem('token')
      const response = await axios.post(`http://localhost:3003/delete_cartItem`,obj, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
      })
      const newCart = response.data
      // window.alert('removed from cart')
      return newCart
    } catch (error) {
      console.log(error)
      return []
    }
  }

  editCartItem = async (obj :any) => {
    try {
      const jwt = localStorage.getItem('token')
      const response = await axios.post(`http://localhost:3003/edit_cartItem`,obj, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
      })
      const res = response.data
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }

  placeOrder = async (obj :any) => {
    try {
      const jwt = localStorage.getItem('token')
      const response = await axios.post(`http://localhost:3003/add_order`,obj, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
      })
      const res = response.data
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }

  getOrders = async () => {
    try {
      const jwt = localStorage.getItem('token')
      const response = await axios.get(`http://localhost:3003/get_orders`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
      })
      const res = response.data
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }


}
