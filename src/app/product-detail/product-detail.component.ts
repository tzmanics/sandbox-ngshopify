import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../models/Product';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  selectedProductId!: string;
  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productListService: ProductListService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const handle = this.route.snapshot.paramMap.get('handle') || '';
    this.productListService
      .getProduct(handle)
      .subscribe((product) => (this.product = product));
  }

  addToCart(productInfo: any) {
    console.log(productInfo);
  }
}
