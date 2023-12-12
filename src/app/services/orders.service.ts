import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArrayOrders } from '../interfaces/orders';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) { }





  getOrders(): Observable<ArrayOrders>{
    return this.http.get<ArrayOrders>(`${environment.apiBase}/orders`);
  }

  postOrder(order: any): Observable<any> {
    return this.http.post(`${environment.apiBase}/orders`, order);
  }

  deleteOrderById(id: any): Observable<any> {
    return this.http.delete(`${environment.apiBase}/orders/${id}`);
  }
  
  

}
