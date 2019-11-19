import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public categories: string[] = ['footwear', 'clothes', 'electronics', 'furnitures'];
  // private product: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  // /**
  //  * @author basil kurian
  //  * @use set products as an  observable variable
  //  */
  // public get products(): Observable<Product[]> {
  //   return this.product.asObservable();
  // }


  public listProducts(): Promise<any> {
    return this.http.get(`${environment.apiBaseUri}/products`, {}).pipe(map(response => response)).toPromise();
  }

}

