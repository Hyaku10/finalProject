import { Component, OnInit } from '@angular/core';
import { ServiceLocal } from 'src/serviceLocal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor(private serviceLocal: ServiceLocal) {
    this.serviceLocal.updateLocal.subscribe(() => {
      this.updateLocal()
    }, (err) => {console.log(err)})

    this.serviceLocal.setAdminComponent.subscribe((val) => {
      this.adminComponent = val
    },)

    this.serviceLocal.setUserComponent.subscribe((val) => {
      this.userComponent = val
    },)

    this.serviceLocal.setLoggedOutComponent.subscribe((val) => {
      this.loggedOutComponent = val
    },)
  }

  ngOnInit(): void {
    const admin = localStorage.getItem('admin');
    if(!admin) {
      localStorage.setItem('admin', 'logged_out');
      localStorage.setItem('token', '');
    }else{
      this.admin = admin
    }
  }

  admin: any = 'logged_out' // logged_out | user | admin
  adminComponent = 'edit' // edit | add
  userComponent = 'products' // products | cart | orders
  loggedOutComponent = 'products' //products | login
  title = 'banana'

  updateLocal = () => {
    this.admin = localStorage.getItem('admin')
  }
  
}
