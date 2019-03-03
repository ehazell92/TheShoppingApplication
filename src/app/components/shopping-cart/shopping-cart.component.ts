import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Input() myCart;
  @Input() cartTotal;
  @Output() cartCalc = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  decCart(th) {
    let idx = 0;
    for (const p of this.myCart) {
      if (p.name === th) {
        this.myCart[idx].quantity--;
        if (this.myCart[idx].quantity === 0) {
          this.myCart.splice(idx, 1);
        }
        this.cartCalc.emit(this.myCart);
        break;
      }
      idx++;
    }
  }

}
