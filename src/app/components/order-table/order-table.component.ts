import { Component } from '@angular/core';
import { ArrayOrders } from '../../interfaces/orders';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [],
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.css'
})
export class OrderTableComponent {

  //dataOrders:ArrayOrders[]=[];

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(
    (response) => { console.log(response); },
    (error) => { console.log(error); });
  }


}
