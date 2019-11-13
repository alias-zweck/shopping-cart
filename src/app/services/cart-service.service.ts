import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { CartProduct } from '../models/CartProduct.interface';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public _cartProduct: BehaviorSubject<CartProduct[]> = new BehaviorSubject([]);
  public total = 0;
  constructor() { }

  get products(): Observable<CartProduct[]> {
    return this._cartProduct.asObservable();
  }
  addToCart(product: Product) {
    if (this._cartProduct.value.find(cartProduct => cartProduct.product.name == product.name)) {
      console.log("found");
      this._cartProduct.value.forEach(cartProduct => {
        if (cartProduct.product.name == product.name) {
          cartProduct.count += 1;
          console.log("hello", cartProduct.count);
        }
        return cartProduct;
      })
    }
    else {
      console.log("not found")
      const cartProduct: CartProduct = {
        product: product,
        count: 1
      };
      this._cartProduct.next([...this._cartProduct.value, cartProduct]);
    }
    // Check whether producr already in cart
    console.log('existing cart', this._cartProduct.value)

    // if increment

    // else add

    // this._cartProduct.next([...this._cartProduct.value, product]);


  }
  removeFromCart(product: Product) {
    if (this._cartProduct.value.find(cartProduct => cartProduct.product.name == product.name)) {
      console.log("found");
      this._cartProduct.value.forEach(cartProduct => {
        if (cartProduct.product.name == product.name) {
          cartProduct.count -= 1;
          if (cartProduct.count < 1) {
            console.log('ivde')
            const filteredcart = this._cartProduct.value.filter(cartProduct => cartProduct.product.name != product.name);
            this._cartProduct.next(filteredcart);
          }
          console.log('existing cart', this._cartProduct.value)
        }
      })
    }
  }
  clearCart(product: CartProduct) {
    this._cartProduct.next([])
  }
  placeOrder(cartproduct: Product) {
    let total=0;
    this._cartProduct.value.forEach(cartproduct => {
      total += cartproduct.product.price * cartproduct.count;
    })
    console.log("total", total)
   
  }
}