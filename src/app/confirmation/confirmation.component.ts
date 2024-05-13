import { CurrencyPipe, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CartDataService } from '../services/cart-data.service';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [NgIf,RouterModule,RouterLink,CurrencyPipe,UpperCasePipe],
  providers:[CartDataService],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  success!: boolean;
  responseData: any;
   totalAmount:any;

  constructor(private route: ActivatedRoute,private router :Router,private cart:CartDataService) { }
   continueShop(){
    sessionStorage.removeItem('cartItems')
    this.router.navigate(['products'])
   }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.success = params['success'] === 'true';
      this.responseData = JSON.parse(params['data']);
    });
    console.log(this.responseData);
    this.totalAmount=0
  }

}
