import { Injectable } from '@angular/core';

import Cart from './models/cart';
import Product from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ManageCartService {
  cart: Cart;

  constructor() {
    this.cart = {
      products: null,
      cartValue: 0
    }
  }

  addToCart(product: Product, quantity: number): void {
    if (this.cart.products === null) {
      this.cart.products = {
        [product.id]: {
          product: product,
          quantity: quantity
        }
      };
      this.cart.cartValue = product.price * quantity;
    }
    else {
      if (this.cart.products[product.id] === undefined) {
        this.cart.products[product.id] = {
          product: product,
          quantity: quantity
        };
      }
      else {
        this.cart.products[product.id].quantity += quantity;
      }
      this.cart.cartValue += product.price * quantity;
    }
    console.log(this.cart);
  }
}
