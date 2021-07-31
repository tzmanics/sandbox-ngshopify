import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from '../product/product.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
