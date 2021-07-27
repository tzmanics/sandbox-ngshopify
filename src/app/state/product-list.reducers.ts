import { Action, createReducer, on } from '@ngrx/store';
import * as ProductListActions from './product-list.actions';

export interface State {
  productList: any[];
}

export const initialState: State = {
  productList: [],
};

const productListReducer = createReducer(
  initialState,
  on(ProductListActions.loadProductList, (state) => ({
    ...state,
    productList: [1, 2, 3],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productListReducer(state, action);
}
