import { Component, Input } from '@angular/core';
import { productList } from '../interfaces/card-interface';
import { AddToCartService } from '../services/add-to-cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: any;

  constructor(private CartService: AddToCartService) {}

  addToCart() {
    this.CartService.addToCart(this.item);
  }
}
