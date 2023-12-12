import { Component } from '@angular/core';
import { ProductTableComponent } from '../../components/product-table/product-table.component';
import { AddProductComponent } from '../../components/add-product/add-product.component';

@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [ProductTableComponent,AddProductComponent],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent {
  buttonCreatePush:boolean = false;
}
