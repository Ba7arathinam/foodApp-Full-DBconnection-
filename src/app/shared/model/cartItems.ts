export class CartItem{
    food:any;
    quantity:number=1;
    constructor(food:any){
        this.food=food
    }
    get Price():number{
        return this.food.amounts * this.quantity;
    }
   
}