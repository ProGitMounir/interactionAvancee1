import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true,
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = this.productService.getAllProducts().subscribe({
      next: (rep) => {
        this.products = rep;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleDelete(product: any): void {
    let v = confirm('Êtes vous sûre de vouloir supprimer ce produit?');
    if (v == true) {
      this.productService.deleteProducts(product).subscribe({
        next: (value) => {
          this.getAllProducts();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
