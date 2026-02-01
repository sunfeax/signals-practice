import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  // Signals
  
  counter = signal<number>(0);
  doubleCounterValue = computed(() => this.counter() * 2);
  
  onClickReset(): void {
    this.counter.set(0);
    this.log;
  };
  
  onClickAdd(): void {
    this.counter.update(val => val + 1);
    this.log;
  };
  
  private log = effect(() => {
    console.log(`New counter value = ${this.counter()}`);
  });
}
