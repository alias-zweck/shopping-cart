import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { CartProduct } from '../models/CartProduct.interface';
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
   * Add a product to cart--if product exists its count value gets incremented
   *
   * @author Basil kurian
   * @param {Product} product product
   * @date 20 Nov, 2019
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
   * Remove a product from cart, if product exists its count value gets decremented, if count value less than 1 product get replaced from cart
   *
   * @author Basil kurian
   * @param {Product} product product
   * @date 20 Nov, 2019
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
   * Clear all products from cart
   *
   * @author Basil kurian
   * @date 20 Nov, 2019
   */
  public clearCart() {
    this.cartProduct.next([]),
      this.total.next(0);
    localStorage.removeItem('items');
  }

  /**
   * Calculate the total amount of products in cart
   *
   * @author Basil kurian
   * @param {cartProduct} cartproduct Cart product
   * @param {any} total total
   * @date 20 Nov, 2019
   */
  public placeOrder() {
    let total = 0;
    this.cartProduct.value.forEach((cartproduct): void => {
      total += cartproduct.product.price * cartproduct.count;
    });
    this.total.next(total);
  }

  /**
   * Display the formdata and products in the console
   *
   * @author Basil kurian
   * @param {any} checkOutData Check out data
   * @return Promise any
   */
  public checkOut(checkOutData: any): Promise<any> {
    return this.http.post(`${environment.apiBaseUri}/checkout`, { checkOutData, product: this.cartProduct.value }).pipe(map(response => response)).toPromise();
  }

  /**
   * Save data from cart to local storage
   *
   * @author Basil kurian
   * @date 19 Nov, 2019
   */
  public saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.cartProduct.value));
  }

  /**
   * Fetch data from local storage and checks if there is data then push to cart
   *
   * @author Basil kurian
   * @date 19 Nov, 2019
   */
  public fetchDataFromStorage() {
    const dataFromStorage = JSON.parse(localStorage.getItem('items'));
    if (dataFromStorage) {
      this.cartProduct.next(dataFromStorage);
    }
  }
}
