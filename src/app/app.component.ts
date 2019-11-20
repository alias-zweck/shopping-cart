import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';
  constructor(public cartService: CartServiceService) {}
  ngOnInit() {}
}
