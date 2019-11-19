import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { CartProduct } from '../models/CartProduct.interface';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartProduct: BehaviorSubject<CartProduct[]> = new BehaviorSubject([]);
  public total: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public get products(): Observable<CartProduct[]> {
    return this.cartProduct.asObservable();
  }

  public get sharedTotal(): Observable<number> {
    return this.total.asObservable();
  }

  constructor(private http: HttpClient) { }

  /**
   * TODO:
   * Rewrite the logic
   * @author basil kurian
   * @param product product
   * @use add a product to cart--if product exists its count value gets incremented
   */
  public addToCart(product: Product) {
    console.log(this.cartProduct.value);
    if (this.cartProduct.value.find(cartProduct => cartProduct.product.name === product.name)) {
      this.cartProduct.value.forEach(cartProduct => {
        if (cartProduct.product.name === product.name) {
          cartProduct.count += 1;
        }
      });
    } else {
      const cartProduct: CartProduct = {
        product,   // object literal
        count: 1
      };
      this.cartProduct.next([...this.cartProduct.value, cartProduct]);
    }
    this.saveToLocalStorage();
  }


  /**
   * @author basil kurian
   * @param product product
   * @use remove a product from cart--if product exists its count value gets decremented
   * if count value less than 1 product get replaced from cart
   */
  public removeFromCart(product: Product) {
    if (this.cartProduct.value.find(cartsProduct => cartsProduct.product.name === product.name)) {
      this.cartProduct.value.forEach(cartProduct => {
        if (cartProduct.product.name === product.name) {
          cartProduct.count -= 1;
          if (cartProduct.count < 1) {
            const filteredCart = this.cartProduct.value.filter(cartsProduct => cartsProduct.product.name !== product.name);
            this.cartProduct.next(filteredCart);
            this.total.next(0);
          }
        }
      });
    }
  }

  /**
   * @author basil kurian
   * @param product product
   * @use clear all products from cart
   */
  public clearCart() {
    this.cartProduct.next([]),
      this.total.next(0);
    localStorage.removeItem('items');
  }

  /**
   * @author basil kurian
   * @param cartproduct cart product
   * @param total total
   * @use calculate the total amount of products in cart
   */
  public placeOrder() {
    let total = 0;
    this.cartProduct.value.forEach((cartproduct): void => {
      total += cartproduct.product.price * cartproduct.count;
    });
    this.total.next(total);
  }

  /**
   * @author basil kurian
   * @param checkOutData check out data
   * @use  display the formdata and products in the console
   */
  public checkOut(checkOutData: FormGroup) {
    console.log(1111, checkOutData);
    console.log(222222, this.cartProduct);

    return this.http.post(`${environment.apiBaseUri}/checkout`, { checkOutData, product: this.cartProduct.value }).pipe(map(response => response)).toPromise();
  }
  /**
   * @author basil kurian
   * @use save data from cart to local storage
   * @date 19 nov,2019
   */
  public saveToLocalStorage() {
    console.log('11111111111');
    console.log(this.cartProduct);
    localStorage.setItem('items', JSON.stringify(this.cartProduct.value));
  }

  /**
   * @author basil kurian
   * @use fetch data from local storage and checks if there is data then push to cart
   * @date 19 nov,2019
   */
  public fetchDataFromStorage() {
    const data = JSON.parse(localStorage.getItem('items'));
    if (data) {
      this.cartProduct.next(data);
    }
  }
}
