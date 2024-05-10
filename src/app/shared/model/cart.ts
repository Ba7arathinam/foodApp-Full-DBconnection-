import { CartItem } from "./cartItems";

export class Cart {
        items:CartItem[] = [];

        get TotalPrice(): number {
            let totalPrice =0
            this.items.forEach((e)=>{
                totalPrice += e.Price
            })
            return totalPrice
        }
}