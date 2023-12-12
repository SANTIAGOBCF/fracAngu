import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/orders';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-product',
  standalone: true,
  imports: [CommonModule,AsyncPipe,FormsModule],
  templateUrl: './modify-product.component.html',
  styleUrl: './modify-product.component.css'
})
export class ModifyProductComponent {

  dataProductById$!: Observable<Product>;
  productId:number=99999

  constructor(private productService: ProductsService, private route:ActivatedRoute) {}




  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productId=Number(id);
      this.loadProduct(Number(id));
    });
    
  }

  loadProduct(id: number) {
    this.dataProductById$=this.productService.getProductById(id);
  }

  onModifyProduct(modifyProductForm: NgForm){
    console.log(modifyProductForm.value);
    const data={
      name:modifyProductForm.value.name,
      price:Number(modifyProductForm.value.price)
    }

    this.route.paramMap.subscribe(params => {

      this.productService.updateProductById(Number(params.get('id')),data).subscribe(
        (response) => {
          // Handle the response from the server
          console.log(response);
          modifyProductForm.reset();
          window.location.href=''
        },
        (error) => {
          // Handle any errors
          console.error(error);
          modifyProductForm.reset();
        }
      );
    });

    
  }
}
