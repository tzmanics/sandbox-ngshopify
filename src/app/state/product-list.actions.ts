import { createAction, props } from '@ngrx/store';

export const loadProductList = createAction(
  '[Product List Page] Load Product List'
);

export const productListLoaded = createAction(
  '[Product List Page] Product List Loaded',
  props<{ Product }>()
);
