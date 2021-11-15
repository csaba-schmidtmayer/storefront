import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ManageDbService } from '../manage-db.service';

import Product from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private _productData!: Subscription;
  products!: Product[];

  constructor(private dbService: ManageDbService) {
  }

  ngOnInit(): void {
    this._productData = this.dbService.getProductList().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy(): void {
    this._productData.unsubscribe();
  }

}
