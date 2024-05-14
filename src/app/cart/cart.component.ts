import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartDataService } from '../services/cart-data.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import {MatIcon} from '@angular/material/icon'
import { CartItem } from '../shared/model/cartItems';
import { Form, FormControlName, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { cart } from 'ngx-bootstrap-icons';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,NgIf,NgFor,MatIcon,FormsModule,RouterModule,ReactiveFormsModule,HttpClientModule],
  providers:[CartDataService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartDataService,private route:Router,private http:HttpClient) {
   
  }
 
  

  ngOnInit(): void {
    this.cartService.getCart().subscribe((data:any)=>{
      this.cartItems=data.meals
      this.totalAmount=data.totalAmount
      this.cartService.totalAmount=this.totalAmount
      console.log(data);
          });
          console.log(this.cartItems)
 
  }

  decreaseQuantity(item: any) {
    this.cartService.decreaseQyt(item.id).subscribe((data)=>{
      // if(data.status==200){
        this.cartService.getCart().subscribe((data:any)=>{
          this.cartItems=data.meals
          this.totalAmount=data.totalAmount
          this.cartService.totalAmount=this.totalAmount
          console.log(data);
              });
      // }
      
    })
  }

  increaseQuantity(item: any) {
    // console.log(item.id);
    
    this.cartService.increaseQyt(item.id).subscribe((data)=>{
      // if(data.status==200){
        this.cartService.getCart().subscribe((data:any)=>{
          this.cartItems=data.meals
          this.totalAmount=data.totalAmount
          this.cartService.totalAmount=this.totalAmount
          console.log(data);
              });
      // }
      
    })
  }


  removeFromCart(item: any) {
   this.cartService.removeFromCart(item.p_id).subscribe((e)=>{
    if(e){
      alert(`${item.p_name} has been removed from Your Cart`)
    }
    this.cartService.getCart().subscribe((data:any)=>{
      this.cartItems=data.meals
      this.totalAmount=data.totalAmount
      this.cartService.totalAmount=this.totalAmount
      console.log(data);
          });
   
  
   })
   
  }



  payment(){
    this.route.navigate(['payment']);
  }
}
