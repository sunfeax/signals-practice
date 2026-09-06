import { Component, model, output } from '@angular/core';

@Component({
  selector: 'app-quantity-stepper',
  imports: [],
  templateUrl: './quantity-stepper.component.html',
  styleUrl: './quantity-stepper.component.scss',
})
export class QuantityStepperComponent {
  quantity = model<number>(1);
  bookRequest = output();

  increment(): void {
    if (this.quantity() >= 10) return;
    this.quantity.update(v => v + 1);
  }

  decrement(): void {
    if (this.quantity() <= 1) return;
    this.quantity.update(v => v - 1);
  }

  book(): void {
    this.bookRequest.emit();
  }
}
