import { Component, Input } from '@angular/core';
import { GetProductListService } from '../app/services/get-product-list.service';
import { Product } from '../app/models/IProduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsList: Array<Product> = [];
  sub: Subscription;
  title = 'TheShoppingCart';

  constructor(private productService: GetProductListService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getProds();
  }

  getProds() {
    this.productService.getProds().subscribe(
      productList => { this.productsList = productList; }
    );
  }

}
