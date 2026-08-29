import { Component, computed, signal } from '@angular/core';

interface Item {
  id: number;
  title: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'app-computed-cart-total',
  imports: [],
  templateUrl: './computed-cart-total.component.html',
  styleUrl: './computed-cart-total.component.css',
})
export class ComputedCartTotalComponent {
  cart = signal<Item[]>([
    { id: 1, title: 'Keyboard', price: 4500, qty: 1 },
    { id: 2, title: 'Mouse', price: 1800, qty: 2 },
    { id: 3, title: 'Mouse pad', price: 700, qty: 3 },
  ]);

  totalPrice = computed(() => this.cart().reduce((sum, item) => sum + item.price * item.qty, 0));
  totalQuantity = computed(() => this.cart().reduce((sum, item) => sum + item.qty, 0));

  increaseItem(itemId: number): void {
    this.cart.update((cart) => {
      return cart.map((item) => (item.id === itemId ? { ...item, qty: item.qty + 1 } : item));
    });
  }

  decreaseItem(itemId: number): void {
    this.cart.update((cart) => {
      return cart.map((item) => {
        if (item.id === itemId && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
    });
  }

  deleteItem(itemId: number): void {
    this.cart.update((cart) => {
      return cart.filter((item) => item.id !== itemId);
    });
  }

  clearCart(): void {
    this.cart.set([]);
  }
}
