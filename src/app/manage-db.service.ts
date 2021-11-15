import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Product from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ManageDbService {
  private _dbUrl = 'assets/products.json';

  constructor(private http: HttpClient) {
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this._dbUrl);
  }
}
