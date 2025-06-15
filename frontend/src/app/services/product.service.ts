import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /* products = [
    { id: 1, name: 'Product 1', price: 100, selected: true },
    { id: 2, name: 'Product 2', price: 200, selected: false },
    { id: 3, name: 'Product 3', price: 300, selected: true },
  ]; */

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('http://localhost:8083/products');
    // return this.products;
  }

  deleteProducts(product: any) {
    //this.products = this.products.filter((p: any) => p.id != product.id);
    return this.http.delete('http://localhost:8083/products/' + product.id);
  }
}
