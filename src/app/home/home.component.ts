import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
declare var AOS:any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive],
  providers:[FoodService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  AOS.init()
}


  

  
}
