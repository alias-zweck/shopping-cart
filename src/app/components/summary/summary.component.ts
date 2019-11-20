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
   * Used to pass userDetails to cartService
   *
   * @author Basil kurian
   * @date 19 Nov, 2019
   */
  public async onSubmit() {
    this.isLoading = !this.isLoading;
    const res = await this.cartService.checkOut(this.userProfile.value);
    this.clearall();
  }

  /**
   * Clear all contents,disable button
   *
   * @author Basil kurian
   * @date 19 Nov, 2019
   */
  public clearall() {
    this.isLoading = false;
    this.userProfile.reset();
    this.cartService.clearCart();
  }
}
