import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { ProductListEffects } from './state/product-list.effects';
import { productListReducer } from './state/product-list.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductListEffects]),
    StoreModule.forRoot({ productList: productListReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
