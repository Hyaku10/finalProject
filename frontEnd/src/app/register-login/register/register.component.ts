import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ServiceService } from 'src/service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {}
  @Output() setDisplay = new EventEmitter()

  first = ""
  last = ""
  email = ""
  password = ""
  confirm = ""
  city = ""
  street = ""

  emitLogin = () => {
    this.setDisplay.emit('login')
  }

  generateDataObj = () => {
    if (!this.first || !this.last || !this.email || !this.password 
    || !this.confirm || !this.city || !this.street){
        return window.alert('please fill all the form fields')
      }
    if(this.password !== this.confirm){
      return window.alert('passwords don`t match')
    }
    const dataObj = {
      first_name : this.first,
      last_name : this.last,
      email : this.email,
      password : this.password,
      city : this.city,
      street : this.street
    }
    return dataObj
  }

  clearForm = () => {
    this.first = ""
    this.last = ""
    this.email = ""
    this.password = ""
    this.confirm = ""
    this.city = ""
    this.street = ""
  }

  handleSubmit = async () => {
    const dataObj = this.generateDataObj()
    if (!dataObj){
      return
    }
    const res = await this.service.registerUser(dataObj)
     if(res.status == 200){
      this.clearForm()
      window.alert('register successful! now you can login to your account')
     }
  }

  constructor(private service : ServiceService){}
}
