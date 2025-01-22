import { Cart } from '../interface/types/cart';

import { Injectable } from '@angular/core';
import { Product } from '../interface/types/product';

@Injectable({
  providedIn: 'root'
})

export class CartItemsServiceService 
{
  cart:Cart[] = [];

  constructor() { }

  getCart(): Cart[] 
  {
    return this.cart;
  }

  setCart(cart: Cart[]): void 
  {
    this.cart = cart;
  }

  addToCart(item:Product): void 
  {
    const existingCartItem = this.cart.find(cartItem => cartItem.product.id === item.id);
    if (existingCartItem) {
      existingCartItem.quantity +=1;
    }
    else
    {
      this.cart.push({product:item,quantity:1}); 
    }
  }

  


}