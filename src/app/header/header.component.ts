import { Component, OnInit } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import {MatIcon} from '@angular/material/icon'
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
declare var AOS:any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive,MatIcon,HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userId!:any;
  constructor(private router:Router,private http:HttpClient){}
  logOut(){
   
    this.userId= sessionStorage.getItem('id')
    return this.http.get(`https://balarathinam-foodapp-api.onrender.com/logOut/${this.userId}`).subscribe((res)=>{
      if(!res){
        alert('User not found')
      }else{
      
        alert('Token Removed')
        sessionStorage.clear()
        this.router.navigate(['login']);
      }
    })
  }
  productNav(){
    this.router.navigate(['products']);
  }
  ngOnInit(): void {
    AOS.init()
  }
}
