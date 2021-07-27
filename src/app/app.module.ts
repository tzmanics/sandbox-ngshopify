import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductListEffects } from './state/product-list.effects';
import * as fromProductlist from './state/product-list.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([ProductListEffects]),
    StoreModule.forRoot({ productList: fromProductlist.reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
