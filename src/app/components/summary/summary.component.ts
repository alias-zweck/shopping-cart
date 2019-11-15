import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public grandTotal = 0;
  public isLoading = false;
  public userProfile = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    mobileNo: new FormControl('')
  });
  constructor(public cartService: CartServiceService) { }

  ngOnInit() {
  }

  /**
   * @author basil kurian
   * @use used to pass userDetails to cartService
   */
  public onSubmit() {
    this.isLoading = !this.isLoading;
    this.cartService.checkOut(this.userProfile.value);
  }
}
