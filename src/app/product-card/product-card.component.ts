import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../interface/types/product';
import { Router } from '@angular/router';
import { CounterServiceService } from '../services/counter-service.service';
import { CartItemsServiceService } from '../services/cart-items-service.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent 
{
  counter:number=0;
  @Input() productItem!:Product;

  counterService =inject(CounterServiceService);

  constructor(private router:Router , private cartService:CartItemsServiceService){}

  ngOnInit()
  {
    this.counterService.getCounter().subscribe(res=>this.counter=res);
  }
  
  handleAddToCart(item:Product)
  {
    this.counterService.setCounter(this.counter+1);

    this.cartService.addToCart(item);
  }

  handleRedirect(id:number)
  {
    this.router.navigate(['/product-details',id]) 
  }

}
