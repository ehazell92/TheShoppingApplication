import { Component } from '@angular/core';
import { GetProductListService } from '../app/services/get-product-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsList: any;
  title = 'TheShoppingCart';

  constructor(private productService: GetProductListService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getProds();
  }

  getProds() {
    this.productService.getProds().subscribe(data => {
      // console.log(data);
      this.productsList = data;
    });
  }
}
