import { Component, OnInit, Input } from '@angular/core';

import Product from '../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product!: Product;
  quantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
