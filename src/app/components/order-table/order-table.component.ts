import { Component } from '@angular/core';
import { ArrayOrders } from '../../interfaces/orders';
import { OrdersService } from '../../services/orders.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [CommonModule,AsyncPipe,DatePipe,RouterModule],
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.css'
})
export class OrderTableComponent {

  dataOrder$!: Observable<ArrayOrders>;

  constructor(private orderService: OrdersService) {}




  ngOnInit() {
    this.dataOrder$=this.orderService.getOrders();
  }

  deleteOrder(id:number){
    this.orderService.deleteOrderById(id).subscribe(
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

}
