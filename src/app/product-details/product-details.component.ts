import { Component, inject, Input } from '@angular/core';
import { Product } from '../interface/types/product';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpRequestsService } from '../services/http-requests.service';
import { CartItemsServiceService } from '../services/cart-items-service.service';
import { CounterServiceService } from '../services/counter-service.service';


@Component({
  selector: 'app-product-details',
  imports: [NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent 
{

  product!:Product;


    counter:number=0;
  
    counterService =inject(CounterServiceService);
  

  constructor(private activatedRoute : ActivatedRoute, private produtRequestService : HttpRequestsService, private cartService:CartItemsServiceService){}

    ngOnInit() 
    {
      this.counterService.getCounter().subscribe(res=>this.counter=res);
      const id=this.activatedRoute.snapshot.params['id'];
      this.produtRequestService.getProductDetails(id).subscribe(res => this.product=res);
      // this.produtRequestService.getProductDetails(id).subscribe(res => console.log(res));
      // console.log(this.product);
    }


  handleAddToCart(item:Product)
  {
    this.counterService.setCounter(this.counter+1);
    this.cartService.addToCart(item);
  }
}
