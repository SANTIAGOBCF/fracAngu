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

  getOrderById(id:any): Observable<any>{
    return this.http.get<any>(`${environment.apiBase}/orders/${id}`);
  }

  postOrder(order: any): Observable<any> {
    return this.http.post(`${environment.apiBase}/orders`, order);
  }

  deleteOrderById(id: any): Observable<any> {
    return this.http.delete(`${environment.apiBase}/orders/${id}`);
  }
  updateStatusOrNameByOrderId(orderId:number,data: any): Observable<any>{
    return this.http.put<any>(`${environment.apiBase}/orders/${orderId}`,data);
  }
  
  deleteOrderItemByOrderIdAndProductId(orderId:number,productId:number): Observable<any>{
    return this.http.delete<any>(`${environment.apiBase}/orderItem/${orderId}/${productId}`);
  }

  updateQuantityOfAProductWithOrderIdAndProductId(orderId:number,productId:number,data: any): Observable<any>{
    return this.http.put<any>(`${environment.apiBase}/orderItem/${orderId}/${productId}`,data);
  }
  postOrderItemWithOrderIdAndProductIdAsReqBody(data:any): Observable<any>{
    return this.http.post<any>(`${environment.apiBase}/orderItem/`,data);
  }

}
