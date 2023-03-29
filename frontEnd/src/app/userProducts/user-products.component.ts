import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {
  
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
    const product = event.target.name
    const obj = {
      product: product,
      amount: 1
    }
    this.service.addCartItem(obj)
  }
  
  async ngOnInit() {
    this.products = await this.service.getProducts()
  }

  constructor(private service : ServiceService){}
}
