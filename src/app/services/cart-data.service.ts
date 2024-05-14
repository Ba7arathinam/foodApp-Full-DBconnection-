import { HttpClient } from '@angular/common/http';
import { CartItem } from './../shared/model/cartItems';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  id :any= sessionStorage.getItem('id');
  viewCart: string = `http://localhost:8080/getCart/${this.id}`;
  deleteCart: string = `http://localhost:8080/deleteCart?u_id=${this.id}&p_id=`;
  quantity:string='http://localhost:8080/updateCart/'
  CartDatas!: any[];
  constructor(private http: HttpClient) {}
  transactionID: any;
  addToCart(item: any) {
    console.log(item);
  }

  getCart(): Observable<any> {
    return this.http.get(this.viewCart);
  }

  increaseQyt(cart_id:any):Observable<any>{
    let id=JSON.parse(this.id)
    return this.http.post(this.quantity+cart_id+'/increase',{"userId":id})
  }
  decreaseQyt(cart_id:any):Observable<any>{
    let id=JSON.parse(this.id)
    return this.http.post(this.quantity+cart_id+'/decrease',{"userId":id})
  }

  removeFromCart(P_id: number): Observable<any> {
    return this.http.delete(this.deleteCart + P_id);
  }
}
