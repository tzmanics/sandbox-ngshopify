import { createReducer, on } from '@ngrx/store';

import { loadProductListSuccess } from './product-list.actions';

export const initialState: any[] = [1, 2, 3];

export const productListReducer = createReducer(
  initialState,
  on(loadProductListSuccess, (_, action) => action.productList)
);
