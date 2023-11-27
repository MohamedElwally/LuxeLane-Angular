import { Component } from '@angular/core';
import { CardDataService } from '../services/card-data.service';
import { productList } from '../interfaces/card-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private cardDataService: CardDataService) {}

  cardsData!: productList;

  ngOnInit() {
    this.cardDataService.getProductList().subscribe((data) => {
      this.cardsData = data;
    });
  }
}
