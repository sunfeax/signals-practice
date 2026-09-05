import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-price-tag',
  imports: [],
  templateUrl: './price-tag.component.html',
  styleUrl: './price-tag.component.scss',
})
export class PriceTagComponent {
  readonly productPrice = input.required<number>();
  readonly productDiscountPercent = input(0, {
    transform: (raw: number) => Math.min(100, Math.max(0, raw)),
  });

  total = computed(
    () => this.productPrice() - (this.productPrice() * this.productDiscountPercent()) / 100,
  );
}
