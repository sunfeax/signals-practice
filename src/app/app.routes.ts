import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'tasks/computed-cart-total',
    loadComponent: () =>
      import('./tasks/computed-cart-total/computed-cart-total.component').then(
        (m) => m.ComputedCartTotalComponent,
      ),
  },
  {
    path: 'tasks/effect-session-timer',
    loadComponent: () =>
      import('./tasks/effect-session-timer/effect-session-timer.component').then(
        (m) => m.EffectSessionTimerComponent,
      ),
  },
  {
    path: 'tasks/linkedSignal-category-picker',
    loadComponent: () =>
      import(
        './tasks/linkedSignal-category-picker/linkedSignal-category-picker.component'
      ).then((m) => m.LinkedSignalCategoryPickerComponent),
  },
  { path: '**', redirectTo: '' },
];
