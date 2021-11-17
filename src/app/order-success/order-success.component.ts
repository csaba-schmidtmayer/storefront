import { Component, OnInit } from '@angular/core';

import { ManageCartService } from '../manage-cart.service';

import Order from '../models/order';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  orderDetails!: Order;

  constructor(private cartService: ManageCartService) {
  }

  ngOnInit(): void {
    this.orderDetails = this.cartService.getOrder();
  }

}
