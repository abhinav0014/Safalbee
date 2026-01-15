import { Product, CartItem } from './types';

const CART_KEY = 'honey_cart';

export const cart = {
  getItems(): CartItem[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  setItems(items: CartItem[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('cartChange'));
  },

  addItem(product: Product, quantity: number = 1): void {
    const items = this.getItems();
    const existingIndex = items.findIndex(item => item.product.id === product.id);

    if (existingIndex >= 0) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({ product, quantity });
    }

    this.setItems(items);
  },

  updateQuantity(productId: number, quantity: number): void {
    const items = this.getItems();
    const index = items.findIndex(item => item.product.id === productId);

    if (index >= 0) {
      if (quantity <= 0) {
        items.splice(index, 1);
      } else {
        items[index].quantity = quantity;
      }
      this.setItems(items);
    }
  },

  removeItem(productId: number): void {
    const items = this.getItems().filter(item => item.product.id !== productId);
    this.setItems(items);
  },

  clear(): void {
    this.setItems([]);
  },

  getTotal(): number {
    return this.getItems().reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  },

  getItemCount(): number {
    return this.getItems().reduce((count, item) => count + item.quantity, 0);
  },
};