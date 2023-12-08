import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArrayOrders } from '../interfaces/orders';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) { }

  private url = 'localhost:3000/api/orders';


  getOrders(): Observable<ArrayOrders>{
    return this.http.get<ArrayOrders>(this.url);
  }

}
