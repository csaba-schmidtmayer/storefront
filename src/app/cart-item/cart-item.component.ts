import { Component, OnInit, Input } from '@angular/core';

import Product from '../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() quantity!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
