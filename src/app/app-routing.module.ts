import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ConfirmCartComponent } from './confirm-cart/confirm-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: ConfirmCartComponent },
  { path: 'products/:id', component: ProductItemDetailComponent },
  { path: 'place-order', component: OrderSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
