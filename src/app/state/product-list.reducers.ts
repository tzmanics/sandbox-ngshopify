import { Action, createReducer, on } from '@ngrx/store';

import { loadProductList } from './product-list.actions';
import { Product } from '../models/Product';

export const initialState: ReadonlyArray<Product> = [];

export const productListReducer = createReducer(
  initialState,
  on(loadProductList, (state) => ({ ...state, productList: [1, 2, 4] }))
);
