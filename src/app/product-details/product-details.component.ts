import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private singleProduct: CardDataService
  ) {}

  productId: any;
  existingProduct: any;

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.singleProduct.getProductDetails(this.productId).subscribe((data) => {
      this.existingProduct = data;
      console.log(this.existingProduct);
    });
  }
}
