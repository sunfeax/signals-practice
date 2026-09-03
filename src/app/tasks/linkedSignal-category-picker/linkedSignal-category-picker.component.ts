import { Component, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

type Category = 'fruits' | 'vegetables' | 'drinks';

@Component({
  selector: 'app-linked-signal-category-picker',
  imports: [FormsModule],
  templateUrl: './linkedSignal-category-picker.component.html',
  styleUrl: './linkedSignal-category-picker.component.scss',
})
export class LinkedSignalCategoryPickerComponent {
  products: Product[] = [
    { id: 1, name: 'Mineral water', price: 1.2, category: 'drinks' },
    { id: 2, name: 'Orange juice', price: 2.5, category: 'drinks' },
    { id: 3, name: 'Green tea', price: 1.8, category: 'drinks' },
    { id: 4, name: 'Gala apple', price: 2.1, category: 'fruits' },
    { id: 5, name: 'Banana', price: 1.5, category: 'fruits' },
    { id: 6, name: 'Orange', price: 2.8, category: 'fruits' },
    { id: 7, name: 'Cherry tomato', price: 3.2, category: 'vegetables' },
    { id: 8, name: 'Cucumber', price: 1.9, category: 'vegetables' },
    { id: 9, name: 'Carrot', price: 0.9, category: 'vegetables' },
  ];

  selectedCategory = signal<string | null>(null);
  selectedProduct = linkedSignal(() => this.productsFiltered()[0]);
  productsFiltered = signal<Product[]>(this.products);

  apply(): void {
    if (this.selectedCategory() === null) return;
    this.productsFiltered.set(this.products.filter((p) => p.category === this.selectedCategory()));
    return;
  }

  selectProduct(product: Product): void {
    this.selectedProduct.set(product);
  }
}
