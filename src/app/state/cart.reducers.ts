import { createReducer, on } from '@ngrx/store';

import { addProductSuccess } from './cart.actions';

export const initialState: any[] = [1, 2, 3];

export const cartReducer = createReducer(
  initialState,
  on(addProductSuccess, (_, action) => action.cart)
);
