import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../models/IProduct';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductListService {

  private productList = new BehaviorSubject<IProduct[]|null>(null);
  productListChanges$ = this.productList.asObservable();
  constructor(private http: HttpClient) { }

  getProds(): Observable<IProduct[]> {
    this.productList.next(null);
    return this.http.get<IProduct[]>('http://localhost:4200/assets/data/products.json')
    .pipe(
      // tap(data => console.log(data)),
      tap(data => this.productList.next(data)),
    );
  }

}
