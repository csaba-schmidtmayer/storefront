import { Component, OnInit } from '@angular/core';

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

  constructor(private cartService: ManageCartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    if (this.cart.products !== null) {
      this.cartItemList = Object.keys(this.cart.products).map((key) => (this.cart.products![parseInt(key)]));
    }
  }

}
