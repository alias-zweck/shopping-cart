import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { CartServiceService } from 'src/app/services/cart-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  constructor(
    public cartService: CartServiceService
  ) { }
  ngOnInit() {
  }
}

