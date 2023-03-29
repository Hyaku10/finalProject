import { Component, Output, EventEmitter } from '@angular/core';
import { ServiceLocal } from 'src/serviceLocal.service';

@Component({
  selector: 'loggedOut-menu',
  templateUrl: './loggedOut-menu.component.html',
  styleUrls: ['./loggedOut-menu.component.css']
})
export class LoggedOutMenuComponent {
  constructor(private serviceLocal : ServiceLocal) {}

  logIn = () => {
    this.serviceLocal.setLoggedOutComponent.emit('login')
  }

  products = () => {
    this.serviceLocal.setLoggedOutComponent.emit('products')
  }

}
