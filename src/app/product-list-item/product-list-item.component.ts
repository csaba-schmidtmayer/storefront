import { Component, OnInit } from '@angular/core';

import Product from '../models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0,
    imageUrl: ''
  };
  quantity: number = 0;

  constructor() {
    this.product = {
      name: 'Book',
      price: 9.99,
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    console.log(`${this.quantity} pieces of ${this.product.name} added to the cart`);
  }
}
