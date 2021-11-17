import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ManageCartService } from '../manage-cart.service';

import { Cart, CartItem } from '../models/cart';

@Component({
  selector: 'app-confirm-cart',
  templateUrl: './confirm-cart.component.html',
  styleUrls: ['./confirm-cart.component.css']
})
export class ConfirmCartComponent implements OnInit {
  cart!: Cart;
  cartItemList!: CartItem[];
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private router: Router, private cartService: ManageCartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this._getItemList();
  }

  _getItemList(): void {
    if (this.cart.products !== null) {
      this.cartItemList = Object.keys(this.cart.products).map((key) => (this.cart.products![parseInt(key)]));
    }
  }

  changeQuantity(cartItem: CartItem): void {
    this.cart = this.cartService.changeQuantity(cartItem.product.id, cartItem.quantity);
    this._getItemList();
  }

  sendOrder(): void {
    this.cartService.submitOrder(this.fullName, this.address, this.creditCard);
    this.router.navigate(['/place-order']);
  }
}
