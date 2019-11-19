import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public categoryValue = 'footwear';
  public products: Product[] = [];
  constructor(public productService: ProductServiceService) { }
  async ngOnInit() {
    this.products = await this.productService.listProducts();
  }
}
