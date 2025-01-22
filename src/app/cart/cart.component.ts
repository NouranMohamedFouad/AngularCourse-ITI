import { Component, inject } from '@angular/core';
import { Cart } from '../interface/types/cart';
import { CartItemsServiceService } from '../services/cart-items-service.service';
import { Product } from '../interface/types/product';
import { CounterServiceService } from '../services/counter-service.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent 
{
  cart!:Cart[];
  counter:number=0;

  counterService =inject(CounterServiceService);
  
  constructor(private cartService:CartItemsServiceService){}

  ngOnInit()
  {
    this.cart=this.cartService.getCart();
    this.counterService.getCounter().subscribe(res=>this.counter=res);
  }

  handleIncreaseQuantity(item: Cart): void {
    item.quantity += 1; 
    this.cartService.setCart(this.cart); 
    this.counterService.setCounter(this.counter+1);
  }

  handleDecreaseQuantity(item: Cart): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.setCart(this.cart); 
      this.counterService.setCounter(this.counter-1);
    } 
  }
  removeItem(item: Cart): void 
  {
    this.cart = this.cart.filter(cartItem => cartItem.product.id !== item.product.id);
    this.cartService.setCart(this.cart); 
    this.counterService.setCounter(this.counter-1);
  }
}
