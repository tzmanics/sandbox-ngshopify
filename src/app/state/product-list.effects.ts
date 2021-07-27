import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ProductListService } from '../services/product-list.service';

@Injectable()
export class ProductListEffects {
  loadProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Product List Page] Load Product List'),
      mergeMap(() =>
        this.productListService.getProductList().pipe(
          map((productList) => ({
            type: '[Product List Page] Product List Loaded',
            payload: productList,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productListService: ProductListService
  ) {}
}
