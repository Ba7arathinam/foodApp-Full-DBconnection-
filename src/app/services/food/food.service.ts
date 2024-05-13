import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../../shared/model/cartItems';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
 
  private   foodurl = 'https://node-team-food-delivery-app-api.onrender.com/getproduct';
  // private foodurl='http://localhost:9090/api/meals'
 private mailurl = 'https://balarathinam-foodapp-api.onrender.com'; 
  constructor(private http: HttpClient) { }

  getFood(): Observable<any> {
   
    return this.http.get(this.foodurl)
  }
  sendEmail(formData: any):Observable<any> {
    return this.http.post(`${this.mailurl}/send_email`, formData,{ responseType: 'text' });
  }
}
