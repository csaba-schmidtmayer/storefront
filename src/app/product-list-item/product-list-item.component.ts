import { Component, OnInit, Input } from '@angular/core';

import { ManageCartService } from '../manage-cart.service';

import Product from '../models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product!: Product;
  quantity: number = 0;

  constructor(private cartService: ManageCartService) {
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartService.addToCart(this.product, this.quantity);
    this.quantity = 0;
  }
}
