import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EditProductsOrderComponent } from '../edit-products-order/edit-products-order.component';
import { Observable } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-order-form',
  standalone: true,
  imports: [CommonModule,AsyncPipe,FormsModule,EditProductsOrderComponent],
  templateUrl: './edit-order-form.component.html',
  styleUrl: './edit-order-form.component.css'
})
export class EditOrderFormComponent {
  dataOrderById$!: Observable<any>;
  orderId!: number;

  constructor(private orderService: OrdersService, private route:ActivatedRoute) {}




  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.orderId=Number(params.get('id'));
      this.loadOrderById(this.orderId);
    });
    
  }

  loadOrderById(id: number) {
    this.dataOrderById$=this.orderService.getOrderById(id);
  }

  onModifyOrder(modifyOrderForm: NgForm){
    
      this.orderService.updateStatusOrNameByOrderId(this.orderId,modifyOrderForm.value).subscribe(
        (response) => {
          console.log(response);
          modifyOrderForm.reset();
          this.loadOrderById(this.orderId);
        },
        (error) => {
          console.error(error);
          modifyOrderForm.reset();
        }
      );
        
  }

}
