import { Component } from '@angular/core';
import { AddToCartService } from '../services/add-to-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartCount: number = 0;
  constructor(private cartService: AddToCartService) {
    this.cartService.getCartCount().subscribe((count) => {
      this.cartCount = count;
    });
  }
}
