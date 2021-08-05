import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css'],
})
export class CartTotalComponent implements OnInit {
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
