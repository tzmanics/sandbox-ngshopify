import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';
import { CartTableComponent } from '../cart-table/cart-table.component';


@NgModule({
  declarations: [
    CartComponent,
    CartTotalComponent,
    CartTableComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
