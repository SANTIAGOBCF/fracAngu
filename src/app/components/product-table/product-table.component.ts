import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/orders';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule,AsyncPipe,DatePipe,RouterLink],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent   {


  dataProduct$!: Observable<Product[]>;

  constructor(private productService: ProductsService) {}




  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.dataProduct$=this.productService.getProducts();
  }

  deleteProduct(id: number) {

    this.productService.deleteProduct(id).subscribe(
      (response) => {
        // Handle the response from the server
        console.log(response);
        this.loadProducts();
      },
      (error) => {
        // Handle any errors
        console.error(error);
      }
    );
  }
}
