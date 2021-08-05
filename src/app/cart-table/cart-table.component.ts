import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent implements OnInit {
  @Input() cartItems: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  removeFromCart(lineId: string) {
    console.log(`Remove line item ${lineId}`);
  }
}
