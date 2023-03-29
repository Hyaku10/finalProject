import { Component } from '@angular/core'
import axios from 'axios'

interface DataObj {
  name: string;
  description: string;
  price: number;
  image_id: string;
}

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    name : string = ''
    description : string = ''
    price : number = 0
    image_id : string = ''

  reset = () => {
    this.name = ''
    this.description = ''
    this.price = 0
    this.image_id = ''
  }

  handleChange = async (event : any) => {
    const name = event.target.name
    const value = event.target.value;
    (this as any)[name] = value
  }
  

  handleSubmit = async (event: Event) => {
    try {
      if(!this.name || !this.description || !this.price || !this.image_id){
        return window.alert('please fill out all the fields')
      }
      const obj = {
        name : this.name,
        description : this.description,
        price : this.price,
        image_id : this.image_id
      }
      const jwt = localStorage.getItem('token')
      const res = await axios.post(`http://localhost:3003/add_product`, obj, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
      })
      this.reset()
      window.alert('product saved')
      return
    } catch (error) {
      console.log(error)
    }
  }
}
