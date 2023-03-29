import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service.service';
import { ServiceLocal } from 'src/serviceLocal.service';

@Component({
  selector: 'user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  
  cartItems: any[] = []
  cartTotal: number = 0

  getImageUrl(imageName: string): string {
    const imageFormats = ['png', 'jpg', 'jpeg']
    for (const format of imageFormats) {
      const imageUrl = `../assets/${imageName}.${format}`
      const http = new XMLHttpRequest()
      http.open('HEAD', imageUrl, false)
      http.send()
      if (http.status !== 404) {
        return imageUrl;
      }
    }
    return '../assets/no-image.png';
  }

  emptyCart = async() => {
    const removeFromCartButtons = await document.querySelectorAll('.removeFromCart')
    for (let i = 0; i < removeFromCartButtons.length; i++) {
          window.setTimeout(()=>{(removeFromCartButtons[i] as HTMLInputElement).click(), 100})
    }
  }

  getTotal = (num1: number, num2: number) => {
    const newNum = num1*num2
    const res = newNum.toFixed(2)
    return res
  }

  calculateTotal = async () => {
    const totals = await document.querySelectorAll('.totalPrice')
    for (let i = 0; i < totals.length; i++) {
      const total = parseFloat((totals[i] as HTMLInputElement).name)
      this.cartTotal += total
    }
  }

  handleRemoveFromCart = async(event: any) => {
    const product = event.target.name
    const obj = {
      product: product,
    }
    await this.service.deleteCartItem(obj)
    this.serviceLocal.setUserComponent.emit('products')
    window.setTimeout(()=>{this.serviceLocal.setUserComponent.emit('cart'),
    100}, )
  }

  handleUpdate = async(event: any) => {
    const product = event.target.name
    const amount = Number((document.getElementById(`${product}_1`)! as HTMLInputElement).value)
    if (amount == 0){
      return window.alert("amount can't be 0")
    }
    if (!amount){
      return window.alert("something's wrong")
    }
    if (amount > 99){
      return window.alert("amount limit is 99")
    }
    const obj = {
      product: product,
      amount: amount
    }
    await this.service.editCartItem(obj)
    this.serviceLocal.setUserComponent.emit('products')
    window.setTimeout(()=>{this.serviceLocal.setUserComponent.emit('cart'),
    100}, )
  }

  placeOrder = async() => {
    const obj = {}
    const res = await this.service.placeOrder(obj)
    if(res !== 'success'){
      return window.alert('something went wrong')
    }
    window.alert('order placed successfully')
    this.emptyCart()
  }
  
  async ngOnInit() {
    this.cartItems = await this.service.getCartItems()
    setTimeout(()=>{this.calculateTotal()}, 500)
  }

  constructor(private service : ServiceService, private serviceLocal : ServiceLocal){}
}
