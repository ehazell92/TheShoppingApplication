import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class GetProductListService {
  constructor(private http: HttpClient) { }
  getProds(): Observable<Array<Product>> {
      return this.http.get<Array<Product>>('http://localhost:4200/assets/data/products.json');
  }
}
