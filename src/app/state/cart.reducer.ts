import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export interface State {
  cart: any[];
}

export const initialState: State = {
  cart: [],
};

const cartReducer = createReducer(
  initialState,
  on(CartActions.addProduct, (state) => ({
    ...state,
    cart: [1, 2, 3],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}
