import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditOrderFormComponent } from '../../components/edit-order-form/edit-order-form.component';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [EditOrderFormComponent],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})
export class EditOrderComponent {
  orderId!:Number;

  constructor(private route: ActivatedRoute, private orderService:OrdersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
    });
  }
}
