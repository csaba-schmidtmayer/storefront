import { Injectable, EventEmitter } from '@angular/core';

import Cart from './models/cart';
import Product from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ManageCartService {
  change: EventEmitter<Cart> = new EventEmitter();
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
  }

  getCart(): Cart {
    return this.cart;
  }

  changeQuantity(productId: number, quantity: number): Cart {
    if (this.cart.products !== null && this.cart.products[productId] !== undefined) {
      this.cart.cartValue += (quantity - this.cart.products[productId].quantity) * this.cart.products[productId].product.price;
      if (quantity === 0) {
        delete this.cart.products[productId];
      }
      else {
        this.cart.products[productId].quantity = quantity;
      }
    }
    return this.cart;
  }
}
