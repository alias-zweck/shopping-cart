import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public product: Product;
  constructor() { }
  ngOnInit() {
    console.log(this.product)
  }
}
