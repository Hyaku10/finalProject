import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/service.service';
import { ServiceLocal } from 'src/serviceLocal.service';

@Component({
  selector: 'user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrderComponent implements OnInit {
  
  orders: any[] = []
  cartTotal: number = 0

  formatDate(dateStr: string): string {
    const date = new Date(dateStr.slice(0, -1));
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }
  
  async ngOnInit() {
    this.orders = await this.service.getOrders()
  }

  constructor(private service : ServiceService, private serviceLocal : ServiceLocal){}
}
