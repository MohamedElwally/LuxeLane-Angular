import { Component } from '@angular/core';
import { AddToCartService } from '../services/add-to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private renderItems: AddToCartService) {}

  itemsRender: any;

  ngOnInit() {
    this.renderItems.getCartItems().subscribe(
      (data) =>
        (this.itemsRender = data.map((item: any) => ({
          ...item,
          quantity: 1,
        })))
    );
  }

  addquantity(item: any) {
    const existingItem = this.itemsRender.find((e: any) => e.id == item);
    existingItem.quantity++;
  }

  substractQuantity(item: any) {
    const existingItem = this.itemsRender.find((e: any) => e.id == item);
    if (existingItem.quantity > 1) {
      existingItem.quantity--;
    }
  }

  removeItem(item: any) {
    const existingItem = this.itemsRender.find((e: any) => e.id === item.id);

    const itemIndex = this.itemsRender.indexOf(existingItem);

    this.itemsRender.splice(itemIndex, 1);
  }

  calculateTotalPrice(item: any) {
    return item.price * item.quantity;
  }

  calculateTotalPriceForAllItems() {
    let totalPrice = 0;
    for (const item of this.itemsRender) {
      totalPrice += this.calculateTotalPrice(item);
    }
    return totalPrice;
  }
}
