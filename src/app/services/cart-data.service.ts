import { CartItem } from './../shared/model/cartItems';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  

  constructor() {}
   transactionID:any;
  addToCart(item: any) {
    let cartItems: CartItem[] = this.getCartItems();
    const cartItem: any = {
      food: item,
      quantity: 1
    };
    cartItems.push(cartItem);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  getCartItems(): CartItem[] {
    const storedItems = sessionStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
  }
  getCartItem(foodId: string): CartItem | undefined {
    const cartItems = this.getCartItems();
    return cartItems.find(item => item.food.idMeal === foodId);
  }
  
  updateCartItem(item: CartItem) {
    let cartItems: CartItem[] = this.getCartItems();
    const index = cartItems.findIndex(cartItem => cartItem.food.idMeal === item.food.idMeal);
    if (index !== -1) {
      cartItems[index] = item;
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    
  }
  getTotalAmount(): number {
    const cartItems = this.getCartItems();
    return cartItems.reduce((total, item) => total + (item.food.amount * item.quantity), 0);
  }

  removeFromCart(item: CartItem) {
    let cartItems: CartItem[] = this.getCartItems();
    const index = cartItems.findIndex(cartItem => cartItem.food.idMeal === item.food.idMeal);
    if (index !== -1) {
      cartItems.splice(index, 1);
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }
 
   }

