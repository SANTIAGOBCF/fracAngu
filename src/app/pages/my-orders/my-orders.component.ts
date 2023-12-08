import { Component } from '@angular/core';
import { OrderTableComponent } from '../../components/order-table/order-table.component';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [OrderTableComponent],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent {

}
