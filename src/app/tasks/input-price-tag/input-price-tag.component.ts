import { Component, signal } from '@angular/core';
import { PriceTagComponent } from './price-tag/price-tag.component';

export interface Product {
  name: string;
  price: number;
  discountPercent: number;
}

@Component({
  selector: 'app-input-price-tag',
  imports: [PriceTagComponent],
  templateUrl: './input-price-tag.component.html',
  styleUrl: './input-price-tag.component.scss',
})
export class InputPriceTagComponent {
  products = signal<Product[]>([
    { name: 'Apple', price: 10, discountPercent: 0 },
    { name: 'Banana', price: 15, discountPercent: 5 },
    { name: 'Orange', price: 20, discountPercent: 10 },
    { name: 'Pineapple', price: 50, discountPercent: 15 },
    { name: 'Strawberry', price: 30, discountPercent: 0 },
    { name: 'Mango', price: 40, discountPercent: 20 },
    { name: 'Blueberry', price: 25, discountPercent: 12 },
    { name: 'Watermelon', price: 60, discountPercent: 25 },
    { name: 'Peach', price: 18, discountPercent: 8 },
    { name: 'Avocado', price: 35, discountPercent: 0 },
  ]);
}
