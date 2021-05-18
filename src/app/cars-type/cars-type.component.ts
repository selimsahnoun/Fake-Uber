import { Component, OnInit, Input } from '@angular/core';
import { priceCalculator } from '../functions';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LogoComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-cars-type',
  templateUrl: './cars-type.component.html',
  styleUrls: ['./cars-type.component.scss'],
})
export class CarsTypeComponent implements OnInit {
  @Input() timeLengthInput: any;
  @Input() distanceInput: any;
  BaseCarPrice: any;
  HighEndCarPrice: any;
  PremiumCarPrice: any;

  constructor(private router: Router) {}
  ngOnInit() {
    var basePrice = priceCalculator({
      distance: this.distanceInput.value,
      time: this.timeLengthInput.value,
    });
    this.BaseCarPrice = basePrice;
    this.HighEndCarPrice = Math.floor(basePrice * 3);
    this.PremiumCarPrice = Math.floor(basePrice * 7);
  }
  summaryRequest() {
    if (typeof localStorage.getItem('token') === 'string') {
      Swal.fire({
        icon: 'success',
        title: 'Ride request confirmed',
        text: `Thank you for using our services. An email will be sent to you shortly`,
      }).then((result) => {
        console.log(result);
        this.router.navigateByUrl('/');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ride request declined',
        text: `Please login or create an account to use our services`,
      }).then((result) => {
        console.log(result);
        this.router.navigateByUrl('/');
      });
    }
  }
}
