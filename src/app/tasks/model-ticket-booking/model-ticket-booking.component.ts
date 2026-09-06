import { Component, signal } from '@angular/core';
import { QuantityStepperComponent } from './quantity-stepper/quantity-stepper.component';

@Component({
  selector: 'app-model-ticket-booking',
  imports: [QuantityStepperComponent],
  templateUrl: './model-ticket-booking.component.html',
  styleUrl: './model-ticket-booking.component.scss',
})
export class ModelTicketBookingComponent {
  counter = signal<number>(10);
}
