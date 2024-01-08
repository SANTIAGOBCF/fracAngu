import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Observable, filter, map } from 'rxjs';
import { Product } from '../../interfaces/orders';

@Component({
  selector: 'app-edit-products-order',
  standalone: true,
  imports: [CommonModule,JsonPipe,FormsModule],
  templateUrl: './edit-products-order.component.html',
  styleUrl: './edit-products-order.component.css'
})
export class EditProductsOrderComponent {
  @Input() dataProduct :any;
  @Input() orderId !:number;
  @Input() loadOrderById: (id: number) => void = (id) => { };
  dataProduct$!: Observable<Product[]>;

  isButtonClicked = false;
  constructor(private productService:ProductsService,private orderService: OrdersService) { }

  ngOnInit() {
    this.loadProducts();
  }

  deleteProductFromOrder(productId: number) {
    this.orderService.deleteOrderItemByOrderIdAndProductId(this.orderId,productId).subscribe(
      (response) => {
        window.location.reload();
        /*this.loadOrderById(this.orderId);
        this.isButtonClicked=false;*/
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateQuantity(quantity:number,productId: number) {
    const data={quantity};
    this.orderService.updateQuantityOfAProductWithOrderIdAndProductId(this.orderId,productId,data).subscribe(
      (response) => {
        this.loadOrderById(this.orderId);
        this.isButtonClicked=false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  
  onAddProduct(addProductForm: NgForm){
    
    const data={
      "orderId": this.orderId,
      "productId": Number(addProductForm.value.nameNewProductOrder),
      "quantity": Number(addProductForm.value.quantityNewProductOrder)
    }

    this.orderService.postOrderItemWithOrderIdAndProductIdAsReqBody(data).subscribe(
      (response) => {
        window.location.reload()
      },
      (error) => {
        console.error(error);
        addProductForm.reset();
      }
    );
  }


  loadProducts() {
    const listProductExcluded=this.dataProduct.OrderItem.map((productAvailable: { Product: any; }) => productAvailable.Product.name);
    this.dataProduct$=this.productService.getProducts().pipe(
        map(products => 
          products.filter(product => 
            !listProductExcluded.includes(product.name)
            )          
        )      
    );
  }
}
