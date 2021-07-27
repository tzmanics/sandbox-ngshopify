import { Product } from '../models/Product';

export interface AppState {
  productList: ReadonlyArray<Product>;
  cart: ReadonlyArray<Product>;
}
