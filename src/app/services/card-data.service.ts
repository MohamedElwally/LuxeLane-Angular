import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productList } from '../interfaces/card-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    return this.http.get<productList>('https://dummyjson.com/products');
  }

  getProductDetails(id: string) {
    return this.http.get<productList>(`https://dummyjson.com/products/${id}`);
  }
}
