import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  
  products : any[] = []

  target: string =''
  value: string | number = ''

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

  handleDelete = async(event : any) => {
    const name = event.target.name
    await this.service.deleteProduct(name)
    location.reload()
  }

  handleEdit = async(event : any) => {
    const name = event.target.name
    const target = this.target
    const value = this.value
    if(!name || !target || !value){
      window.alert('name, target or value missing')
      return
    }
    await this.service.editProduct(name, target, value)
    location.reload()
  }
  
  async ngOnInit() {
    this.products = await this.service.getProducts()
  }

  constructor(private service : ServiceService){}
}
