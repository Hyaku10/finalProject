import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ServiceLocal {

  constructor() {}

  updateLocal = new EventEmitter() //updates admin state from localStorage
  setUserComponent = new EventEmitter() //emits click events on user menu buttons
  setAdminComponent = new EventEmitter() //emits click events on admin menu buttons
  setLoggedOutComponent = new EventEmitter() //emits click events on logged out menu buttons

}
