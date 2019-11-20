import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  /**
   * Get categories from the backend
   *
   * @author Basil kurian
   * @return Promise any
   * @date 20 Nov, 2019
   */
  public getCategories(): Promise<any> {
    return this.http.get(`${environment.apiBaseUri}/category`, {}).pipe(map(response => response)).toPromise();
  }

  /**
   * Get products from backend
   *
   * @author Basil kurian
   * @return Promise any
   * @date 20 Nov, 2019
   */
  public listProducts(): Promise<any> {
    return this.http.get(`${environment.apiBaseUri}/products`, {}).pipe(map(response => response)).toPromise();
  }
}

