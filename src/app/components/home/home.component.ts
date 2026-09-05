import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TaskLink {
  path: string;
  title: string;
  topic: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Обычный массив, а не сигнал: список задач не меняется во время работы приложения.
  readonly tasks: TaskLink[] = [
    {
      path: '/tasks/computed-cart-total',
      title: 'Корзина: итоги на computed',
      topic: 'Блок 1 · signal + computed',
    },
    {
      path: '/tasks/effect-session-timer',
      title: 'Таймер сессии на effect',
      topic: 'Блок 1 · effect',
    },
    {
      path: '/tasks/linkedSignal-category-picker',
      title: 'Выбор товара на linkedSignal',
      topic: 'Блок 1 · linkedSignal',
    },
    {
      path: '/tasks/input-price-tag',
      title: 'Ценник товара на input()',
      topic: 'Блок 2 · input',
    },
  ];
}
