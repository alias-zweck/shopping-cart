import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { CategoryPipe } from 'src/app/category.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public categoryValue = "footwear";
  constructor(public productService: ProductServiceService) { }
  ngOnInit() {

    // this.productService.products.subscribe(products => {
    //   this.products = products;
    //   console.log("hellochild", this.products)

  }
}