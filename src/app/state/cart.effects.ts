import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CartService } from '../services/cart.service';

@Injectable()
export class CartEffects {
  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Product Detail Page] Add product'),
      mergeMap((action) =>
        this.cartService.addToCart(action).pipe(
          map((cart) => {
            window.localStorage.setItem('ngShopifyCartId', cart.id);
            return {
              type: '[Product Detail Page] Add product success',
              cart: cart,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private cartService: CartService) {}
}
