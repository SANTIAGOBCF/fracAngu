import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/orders';
import { ProductsService } from '../../services/products.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { validationInputs } from '../../helpers/validationInputs';
import { addOrder } from '../../classes/addOrder';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [CommonModule,FormsModule,AsyncPipe],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css'
})
export class AddOrderComponent {

  dataProduct$!: Observable<Product[]>;
  inputNumber: number=1;
  elements: number[] = [1];
  status: string = "Completed";


  constructor(private productService: ProductsService, private ordersService: OrdersService) {}




  ngOnInit() {
    this.dataProduct$=this.productService.getProducts();
    console.log(this.dataProduct$);
  }

  onAddOrder(addForm: NgForm){
    const order= new addOrder();
    
    order.name=addForm.value.inputName;
    order.status=this.status;

    
    for (var i = 1; i<=this.inputNumber; i++) {
      var select_key = "select" + i;
      var input_key = "input" + i;
      const value1=Number(addForm.value[select_key]);
      const value2=addForm.value[input_key]
      if(this.checkValue(value1) && this.checkValue(value2)){
        order.products.push(value1)
        order.quantity.push(value2)
      }
    }
    
    
    console.log(order);

    this.ordersService.postOrder(order).subscribe(
      (response) => {
        // Handle the response from the server
        console.log(response);
        window.location.href='/myOrders'
      },
      (error) => {
        // Handle any errors
        console.error(error);
      }
    );

  }

  checkValue(value: number){
      return value !=null && value !=undefined && !Number.isNaN(value)
  }


  addElement() {
    this.inputNumber=validationInputs.validateInputNumber(this.inputNumber);
    this.elements = Array.from({ length: this.inputNumber }, (_, i) => i + 1);
  }

}

