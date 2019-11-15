import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Pipe({
  name: 'category'
})

export class CategoryPipe implements PipeTransform {
  transform(products: Observable<Product[]>, category: string) {
    return products.pipe(
      map(product => product.filter(productItem => productItem.category === category))
    );
  }
}
