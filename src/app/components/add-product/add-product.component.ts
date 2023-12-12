import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/orders';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {


  constructor(private productService: ProductsService) {}



  onAddProduct(addProductForm: NgForm){
    
    console.log(addProductForm.value);

    this.productService.postProduct(addProductForm.value).subscribe(
      (response) => {
        // Handle the response from the server
        console.log(response);
        addProductForm.reset();
        window.location.href=''
      },
      (error) => {
        // Handle any errors
        console.error(error);
        addProductForm.reset();
      }
    );
  }
}
