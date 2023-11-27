import { Injectable } from '@angular/core';
import { productList } from '../interfaces/card-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private cartItemsSubject = new BehaviorSubject<productList[]>([]);
  private cartCountSubject = new BehaviorSubject<number>(0);

  addToCart(item: productList) {
    const currentItems = this.cartItemsSubject.value;
    if (!currentItems.includes(item)) {
      this.cartItemsSubject.next([...currentItems, item]);
      this.updateCartCount();
    }
  }

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  getCartCount() {
    return this.cartCountSubject.asObservable();
  }

  private updateCartCount() {
    this.cartCountSubject.next(this.cartItemsSubject.value.length);
  }
}
