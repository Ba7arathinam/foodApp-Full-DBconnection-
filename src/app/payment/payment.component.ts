import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartDataService } from '../services/cart-data.service';
import { CurrencyPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterModule,CurrencyPipe,HttpClientModule],
  providers:[CartDataService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
 
 totalAmount!:number;
 
constructor(private Route:Router,private payment:CartDataService,private http:HttpClient){
  this.totalAmount=this.payment.getTotalAmount()
}
//PhonePe
PhonePe():any{
  this.http.get<any>('https://stripe-payment-gatway.onrender.com/create-checkout-session?amount='+this.totalAmount)
  .subscribe(
    (response:any) => {

      window.location.href =response.url
    },
    (error) => {
      console.error('Error initiating payment:', error);
    }
  );
}
//cancel
cancel(){
 this.Route.navigate(['/cart'])
}

}
