import { createAction, props } from '@ngrx/store';

export const loadProductList = createAction(
  '[Product List Page] Load Product List',
  props<{ Product }>()
);
