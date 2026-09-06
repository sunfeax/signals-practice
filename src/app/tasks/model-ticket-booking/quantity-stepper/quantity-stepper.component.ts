import { Component, model } from '@angular/core';

@Component({
  selector: 'app-quantity-stepper',
  imports: [],
  templateUrl: './quantity-stepper.component.html',
  styleUrl: './quantity-stepper.component.scss',
})
export class QuantityStepperComponent {
  count = model<number>(0);

  increment(): void {
    this.count.update(v => v + 1);
  }

  decrement(): void {
    this.count.update(v => v - 1);
  }
}
