import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: '1',
    handle: 'https://netlify.com',
    description: 'test description',
    image: 'https://bit.ly/20o7MGL',
    title: 'test title',
    variants: { edges: [] },
  };

  constructor() {}

  ngOnInit(): void {}
}
