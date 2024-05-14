import { CurrencyPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Router, RouterModule } from '@angular/router';
import { CartDataService } from '../services/cart-data.service';
import { FormsModule } from '@angular/forms';
import {SkeletonModule} from 'primeng/skeleton'
declare var AOS:any;
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    HttpClientModule,
    NgFor,
    NgClass,
    CurrencyPipe,
    RouterModule,
    NgIf,
    FormsModule,
    NgClass,
    NgStyle,
    SkeletonModule
  ],
  providers: [FoodService, CartDataService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent  {

  loading: boolean = true;
  meals: any[] = [];
  filteredMeals: any[] = [];
  searchTerm: any = '';
  id=sessionStorage.getItem('id')
  addtocart:string=`https://node-team-food-delivery-app-api.onrender.com/addCart/${this.id}/`
  constructor(
    private val: FoodService,
    private Route: Router,
    private cart: CartDataService,
    private http:HttpClient
  ) {}
  getStarArray(rating: number): number[] {
    return Array(rating)
      .fill(0)
      .map((x, i) => i);
  }

  addToCart(food: any) {
    let cart=this.http.post(this.addtocart+food.id,{}).subscribe((res)=>{
      console.log(res)
   
    })

    if (cart) {
      this.Route.navigate(['/cart']);
    } else {
     alert('Data Error')
    }
    
  }

  ngOnInit() :void {
    // AOS.init();
    console.log('start product')
    this.val.getFood().subscribe(
      (res) => {
        this.loading = false;
        // console.log(res);
        this.meals = res.message;
        this.filteredMeals = this.meals;
        console.log(this.filteredMeals);
        
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    console.log('end product')
  }
  filterMeals() {
    if (!this.searchTerm) {
      this.filteredMeals = this.meals;
    } else {
      this.filteredMeals = this.meals.filter((meal) =>
        meal.Product_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  
}
