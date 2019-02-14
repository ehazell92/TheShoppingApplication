import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetProductListService {

  constructor(private http: HttpClient) { }

  getProds() {
    // return this.http.get('http://localhost:4200/assets/data/products.json')
    //  .subscribe(data => {
      //  return data;
        // console.log(data);
    //  });
    return this.http.get('http://localhost:4200/assets/data/products.json');
  }

}
