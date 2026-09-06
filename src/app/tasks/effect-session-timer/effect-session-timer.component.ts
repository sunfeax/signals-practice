import { Component, computed, effect, signal } from '@angular/core';

type TimerState = 'started' | 'paused' | 'initial';

@Component({
  selector: 'app-effect-session-timer',
  imports: [],
  templateUrl: './effect-session-timer.component.html',
  styleUrl: './effect-session-timer.component.scss',
})
export class EffectSessionTimerComponent {
  constructor() {
    effect(onCleanup => {
      if (this.state() === 'started') {
        const intervalId = setInterval(
          () => this.timer.update(v => v + 1),
          1000,
        );
        onCleanup(() => clearInterval(intervalId));
      }
    });
  }

  timer = signal<number>(0);
  state = signal<TimerState>('initial');
  notification = computed(() => this.timer() >= 30);

  reset(): void {
    this.timer.set(0);
    this.state.set('initial');
  }

  pause(): void {
    this.state.set('paused');
  }

  start(): void {
    this.state.set('started');
  }
}
