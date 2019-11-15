import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CartProduct } from 'src/app/models/CartProduct.interface';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: CartProduct[];
  constructor(public cartService: CartServiceService) { }
  ngOnInit() {
  }
}
