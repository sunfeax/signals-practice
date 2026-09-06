import { Component, signal } from '@angular/core';
import { QuantityStepperComponent } from './quantity-stepper/quantity-stepper.component';

export interface Order {
  id: number;
  tickets: number;
}

@Component({
  selector: 'app-model-ticket-booking',
  imports: [QuantityStepperComponent],
  templateUrl: './model-ticket-booking.component.html',
  styleUrl: './model-ticket-booking.component.scss',
})
export class ModelTicketBookingComponent {
  id = 5;

  orders = signal<Order[]>([
    { id: 1, tickets: 1 },
    { id: 2, tickets: 2 },
    { id: 3, tickets: 2 },
    { id: 4, tickets: 4 },
  ]);
  ticketAmount = signal<number>(1);

  placeOrder(): void {
    alert('Your book was sended!');
    this.orders.set([
      ...this.orders(),
      { id: this.id++, tickets: this.ticketAmount() },
    ]);
    alert('Order was placed');
    this.ticketAmount.set(1);
    console.log(this.orders());
  }
}
