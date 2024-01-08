import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddOrderFormComponent } from '../../components/add-order-form/add-order-form.component';

@Component({
  selector: 'app-add-orders',
  standalone: true,
  imports: [AddOrderFormComponent],
  templateUrl: './add-orders.component.html',
  styleUrl: './add-orders.component.css'
})
export class AddOrdersComponent {

}
