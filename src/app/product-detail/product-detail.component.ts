import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';
import { loadProductList } from '../state/product-list.actions';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  selectedProductId!: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductListService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const handle = this.route.snapshot.paramMap.get('handle') || '';
    this.productsService.getProduct(handle).subscribe((product) => {
      this.product = product;
      this.selectedProductId = this.product.variants.edges[0].node.id;
    });
  }

  addToCart(productInfo: any) {
    console.log(productInfo);
  }
}
