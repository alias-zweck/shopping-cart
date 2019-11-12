import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.interface';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Pipe({
  name: 'category'
})

export class CategoryPipe implements PipeTransform {

  transform(products: Observable<Product[]>, category: string) {
    return products.pipe(
      map(products => products.filter(product => product.category == category))
    );
  }
}
