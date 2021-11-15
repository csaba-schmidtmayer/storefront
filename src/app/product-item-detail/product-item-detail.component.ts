import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ManageCartService } from '../manage-cart.service';
import { ManageDbService } from '../manage-db.service';

import Product from '../models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit, OnDestroy {
  private _routeParams!: Subscription;
  private _productData!: Subscription;
  id!: number;
  product!: Product;
  quantity: number = 0;

  constructor(
    private cartService: ManageCartService,
    private route: ActivatedRoute,
    private dbService: ManageDbService
  ) {
  }

  ngOnInit(): void {
    this._routeParams = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
    });
    this._productData = this.dbService.getProductList().subscribe((data) => {
      this.product = data.filter((product) => (product.id === this.id))[0];
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.product, this.quantity);
  }

  ngOnDestroy(): void {
    this._routeParams.unsubscribe();
    this._productData.unsubscribe();
  }
}
