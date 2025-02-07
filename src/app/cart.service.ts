import { Injectable, signal } from '@angular/core';
import { Product } from './sotck-int'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<Product[]>([]); // Estado reactivo del carrito

  // Agregar un producto al carrito
  addToCart(product: Product) {
    this.cartItems.update(items => [...items, product]);
  }

  // Eliminar un producto del carrito por ID
  removeFromCart(productId: number) {
    this.cartItems.update(items => items.filter(item => item.id !== productId));
  }

  // Vaciar todo el carrito
  clearCart() {
    this.cartItems.set([]);
  }
}
