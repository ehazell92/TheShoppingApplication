import { Component, Input } from '@angular/core';
import { GetProductListService } from '../app/services/get-product-list.service';
import { Product } from '../app/models/IProduct';
import { Subscription } from 'rxjs';
import { CartTotalService } from '../app/services/cart-total.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsList: Array<Product> = [];
  cartTotal: any;
  originalProductList: any;
  sub: Subscription;
  title = 'TheShoppingCart';
  myCart = [];

  constructor(private productService: GetProductListService, public cTotal: CartTotalService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getProds();
  }

  getProds() {
    this.productService.getProds().subscribe(
      productList => {
        this.productsList = [];
        this.originalProductList = [];
        this.productsList = productList;
        this.originalProductList = productList;
      }
    );
  }

  filterProductList(th) {
    if (th.keyCode === 8) {
      this.getProds();
      return;
    }
    if (th.target.value.length > 0) {
      this.productsList = this.originalProductList;
      let idx = 0;
      for (const p of this.productsList) {
        if (p.name.includes(th.target.value) === false) {
          this.productsList.splice(idx, 1);
        }
        idx++;
      }
    }
  }

  updateCart(prod) {
    let pushUP = true;
    const cartPush = () => {
      this.myCart.push(
        {
          name: prod.name,
          price: prod.price,
          quantity: 1
        }
      );
    };

    if (this.myCart.length > 0) {
      let idx = 0;
      for (const p of this.myCart) {
        if (p.name === prod.name) { pushUP = false; break; }
        idx++;
      }

      if (pushUP) { cartPush();
      } else { this.myCart[idx].quantity++; }

    } else { cartPush(); }
    this.cartTotal = this.cTotal.calcCartTotal(this.myCart);
  }

  updateTotal(crt) {
    this.cartTotal = this.cTotal.calcCartTotal(crt);
  }


}
