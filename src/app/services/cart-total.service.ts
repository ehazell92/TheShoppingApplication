import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartTotalService {
  calcCartTotal(crt) {
    let addition = 0;
    for (const p of crt) {
      addition = addition + (p.price * p.quantity);
    }
    addition = Number(addition.toFixed(2));
    return addition;
  }
}
