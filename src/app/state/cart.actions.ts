import { createAction, props } from '@ngrx/store';

export const addProduct = createAction(
  '[Product Detail Page] Add product',
  props<{ productInfo: any }>()
);

export const addProductSuccess = createAction(
  '[Product Detail Page] Add product success',
  props<{ cart: any[] }>()
);

export const getCart = createAction('[Shopify API] Get cart');

export const getCartSuccess = createAction(
  '[Shopify API] Get cart success',
  props<{ cart: any[] }>()
);
