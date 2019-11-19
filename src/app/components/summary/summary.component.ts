import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public grandTotal = 0;
  public isLoading = false;
  public userProfile = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    mobileNo: new FormControl('', Validators.required)
  });
  constructor(public cartService: CartServiceService) { }

  ngOnInit() { }

  /**
   * @author basil kurian
   * @use used to pass userDetails to cartService
   * @date 19,nov 2019
   */
  public async onSubmit() {
    console.log(this.userProfile);
    this.isLoading = !this.isLoading;
    const res = await this.cartService.checkOut(this.userProfile.value);
    console.log('res====>', res);
    this.clearall();
  }

  /**
   * @author basil kurian
   * @use clear all contents,disable button
   * @date : nov 19, 2019
   */
  public clearall() {
    this.isLoading = false;
    this.userProfile.reset();
    this.cartService.clearCart();

  }

}
