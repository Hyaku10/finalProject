import { Component, Output, EventEmitter } from '@angular/core';
import { ServiceLocal } from 'src/serviceLocal.service';

@Component({
  selector: 'admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {
  constructor(private serviceLocal : ServiceLocal) {}

  logOut = () => {
    localStorage.setItem('admin', 'logged_out')
    this.serviceLocal.updateLocal.emit()
  }

  edit = () => {
    this.serviceLocal.setAdminComponent.emit('edit')
  }

  add = () => {
    this.serviceLocal.setAdminComponent.emit('add')
  }
}
