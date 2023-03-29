import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService } from 'src/service.service';
import { ServiceLocal } from 'src/serviceLocal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  @Output() setDisplay = new EventEmitter()
  constructor(private serviceLocal : ServiceLocal ){}

  email = ''
  password = ''
  service = new ServiceService

  emitRegister = () => {
    this.setDisplay.emit('register')
  }

  handleSubmit = async () => {
    if(!this.email || !this.password){
      window.alert('enter email and password')
    }
    const dataObj = {
      email : this.email,
      password : this.password
    }
    const res = await this.service.login(dataObj)
    localStorage.setItem('admin', res.admin)
    localStorage.setItem('token', res.token)
    this.serviceLocal.updateLocal.emit()
  }

}
