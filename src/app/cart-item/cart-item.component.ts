import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ManageCartService } from '../manage-cart.service';

import Product from '../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() quantity!: number;
  @Output() changeQuantity: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: ManageCartService) {
  }

  ngOnInit(): void {
  }

  changeQuantityInner(quantity:number): void {
    this.changeQuantity.emit({
      product: this.product,
      quantity: quantity
    });
  }
}
