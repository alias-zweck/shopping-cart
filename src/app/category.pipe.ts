import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.interface';

@Pipe({
  name: 'category'
})

export class CategoryPipe implements PipeTransform {
  constructor() { }
  transform(products: Product[], category: string) {
    console.log(products);
    return products.filter((productItem: { category: string; }) => productItem.category === category);
  }
}
