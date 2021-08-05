import { createReducer, on } from '@ngrx/store';

import { addProductSuccess } from './cart.actions';

export const initialState: any[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addProductSuccess, (_, action) => action.cart)
);
