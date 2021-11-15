import { Component, OnInit, Input } from '@angular/core';

import { ManageCartService } from '../manage-cart.service';

import Product from '../models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product!: Product;
  quantity: number = 0;

  constructor(private cartService: ManageCartService) {
    this.product = {
      "id": 1,
      "name": "Book",
      "price": 9.99,
      "imageUrl": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "You can read it!"
    };
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartService.addToCart(this.product, this.quantity);
  }
}
