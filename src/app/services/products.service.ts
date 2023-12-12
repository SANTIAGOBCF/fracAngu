import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Product } from '../interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }



  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiBase}/products`);
  }

  getProductById(productId: number): Observable<Product>{
    return this.http.get<Product>(`${environment.apiBase}/products/${productId}`);
  }

  postProduct(data: any): Observable<any>{
    return this.http.post<any>(`${environment.apiBase}/products`,data);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${environment.apiBase}/products/${productId}`);
  }

  updateProductById(id:number,data: any): Observable<any>{
    return this.http.put<any>(`${environment.apiBase}/products/${id}`,data);
  }
}
