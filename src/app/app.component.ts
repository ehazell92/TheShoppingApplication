import { Component, Input } from '@angular/core';
import { GetProductListService } from '../app/services/get-product-list.service';
import { IProduct } from '../app/models/IProduct';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsList: IProduct[];
  sub: Subscription;
  title = 'TheShoppingCart';

  constructor(private productService: GetProductListService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getProds();
  }

  getProds() {
    // this.productService.getProds().subscribe(data => {
    //   this.productsList = data;
    //   this.products = data;
    // });
    // this.sub = this.productService.productListChanges$.subscribe(
    //   response => this.productsList = response,
    //   error => console.log('product fetch error')
    // );
    this.productService.getProds().subscribe(
        response => this.productsList = response,
        error => console.log('product fetch error')
    );

    // POSSIBLE solution??
    // .subscribe((response: any) => {
    //   this.categories = <CategoryInterface[]>response.categories;
    //   console.log(this.categories);
    // });
  }
}
