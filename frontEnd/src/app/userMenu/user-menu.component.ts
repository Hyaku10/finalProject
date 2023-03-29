import { Component, Output, EventEmitter } from '@angular/core';
import { ServiceLocal } from 'src/serviceLocal.service'

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  constructor(private serviceLocal : ServiceLocal) {}

  logOut = () => {
    localStorage.setItem('admin', 'logged_out')
    this.serviceLocal.updateLocal.emit()
  }

  productsComponent = () => {
    this.serviceLocal.setUserComponent.emit('products')
  }

  cartComponent = () => {
    this.serviceLocal.setUserComponent.emit('cart')
  }

  ordersComponent = () => {
    this.serviceLocal.setUserComponent.emit('orders')
  }
}
