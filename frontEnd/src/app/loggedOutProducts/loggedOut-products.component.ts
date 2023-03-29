import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'loggedOut-products',
  templateUrl: './loggedOut-products.component.html',
  styleUrls: ['./loggedOut-products.component.css']
})
export class LoggedOutProductsComponent implements OnInit {
  
  products : any[] = []

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

  handleAddToCart = (event : any) =>{
    window.alert('log in to add products to your cart')
  }
  
  async ngOnInit() {
    this.products = await this.service.getProducts()
  }

  constructor(private service : ServiceService){}
}
