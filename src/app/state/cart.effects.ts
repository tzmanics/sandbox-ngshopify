import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CartService } from '../services/cart.service';

@Injectable()
export class CartEffect {
  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Product Detail Page] Add product'),
      mergeMap(() =>
        this.cartService.addToCart(productInfo).pipe(
          map((cart) => {
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
