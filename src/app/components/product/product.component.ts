import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartTotalService } from '../../services/cart-total.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() prod;
  @Output() selProduct = new EventEmitter();
  constructor(public cTotal: CartTotalService) { }

  ngOnInit() {
  }

  addToCart(th) {
    const selectedProduct = th.prod;
    this.selProduct.emit(selectedProduct);
  }

}
