import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddOrderComponent } from '../../components/add-order/add-order.component';

@Component({
  selector: 'app-add-edit-orders',
  standalone: true,
  imports: [AddOrderComponent],
  templateUrl: './add-edit-orders.component.html',
  styleUrl: './add-edit-orders.component.css'
})
export class AddEditOrdersComponent {

}
