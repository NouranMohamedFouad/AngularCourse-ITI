import { Component, Output } from '@angular/core';
import { Product } from '../interface/types/product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { HttpRequestsService } from '../services/http-requests.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  
  counter:number=0;

  //  products: Product[] = 
  //  [
  //   {
  //     id: 1,
  //     image:'../../assets/images/purpleheadphone.png',
  //     name: 'Wireless Headphone',
  //     description: 'High-quality wireless headphones with noise cancellation.',
  //     rate:"⭐⭐⭐⭐⭐",
  //     stockNum:3,
  //     price:500,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'100.00/Month'
  //   },
  //   {
  //     id: 2,
  //     image: '../../assets/images/phone.png',
  //     name: 'Smartphone',
  //     description: 'Latest model smartphone with a sleek design.',
  //     rate:"⭐⭐⭐⭐",
  //     stockNum:0,
  //     price:7000,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'500.00/Month'



  //   },
  //   {
  //     id: 3,
  //     image: '../../assets/images/laptop.png',
  //     name: 'Gaming Laptop',
  //     description: 'Powerful gaming laptop with high-performance graphics.',
  //     rate:"⭐⭐⭐",
  //     stockNum:6,
  //     price:10000,
  //     images:['./../assets/images/imageLaptop.png','./../assets/images/imagelaptop2.png'],
  //     installments:'700.00/Month'



  //   },
  //   {
  //     id: 4,
  //     image: '../../assets/images/watch.png',
  //     name: 'Smartwatch',
  //     description: 'Stylish smartwatch with fitness tracking features.',
  //     rate:"⭐⭐⭐⭐",
  //     stockNum:3,
  //     price:5200,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'300.00/Month'


  //   },
  //   {
  //     id: 5,
  //     image: '../../assets/images/pinkheadphone.png',
  //     name: 'Pink Headphone',
  //     description: 'Portable headphone with excellent sound quality.',
  //     rate:"⭐⭐⭐⭐⭐",
  //     stockNum:5,
  //     price:2000,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'300.00/Month'


  //   },
  //   {
  //     id: 6,
  //     image: '../../assets/images/speaker.png',
  //     name: 'Bluetooth Speaker',
  //     description: 'Portable Bluetooth speaker with excellent sound quality.',
  //     rate: "⭐⭐⭐",
  //     stockNum:5,
  //     price:900,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'100.00/Month'



  //   },
  //   {
  //     id: 7,
  //     image:'../../assets/images/purpleheadphone.png',
  //     name: 'Wireless Headphone',
  //     description: 'High-quality wireless headphones with noise cancellation.',
  //     rate:"⭐⭐⭐⭐⭐",
  //     stockNum:3,
  //     price:500,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'99.00/Month'


  //   },
  //   {
  //     id: 8,
  //     image: '../../assets/images/phone.png',
  //     name: 'Smartphone',
  //     description: 'Latest model smartphone with a sleek design.',
  //     rate:"⭐⭐⭐⭐",
  //     stockNum:0,
  //     price:7000,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'500.00/Month'



  //   },
  //   {
  //     id: 9,
  //     image: '../../assets/images/laptop.png',
  //     name: 'Gaming Laptop',
  //     description: 'Powerful gaming laptop with high-performance graphics.',
  //     rate:"⭐⭐⭐",
  //     stockNum:6,
  //     price:10000,
  //     images:['./../assets/images/imageLaptop.png','./../assets/images/imagelaptop2.png'],
  //     installments:'700.00/Month'



  //   },
  //   {
  //     id: 10,
  //     image: '../../assets/images/watch.png',
  //     name: 'Smartwatch',
  //     description: 'Stylish smartwatch with fitness tracking features.',
  //     rate:"⭐⭐⭐⭐",
  //     stockNum:3,
  //     price:5200,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'300.00/Month'


  //   },
  //   {
  //     id: 11,
  //     image: '../../assets/images/pinkheadphone.png',
  //     name: 'Pink Headphone',
  //     description: 'Portable headphone with excellent sound quality.',
  //     rate:"⭐⭐⭐⭐⭐",
  //     stockNum:5,
  //     price:2000,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'200.00/Month'


  //   },
  //   {
  //     id: 12,
  //     image: '../../assets/images/speaker.png',
  //     name: 'Bluetooth Speaker',
  //     description: 'Portable Bluetooth speaker with excellent sound quality.',
  //     rate: "⭐⭐⭐",
  //     stockNum:5,
  //     price:900,
  //     images:['./../assets/images/phoneside2.png','./../assets/images/phoneside3.png'],
  //     installments:'89.00/Month'
  //   },
  // ];


  urlProducts!:Product[];

  constructor(private httpRequest: HttpRequestsService){}

  ngOnInit()
  {
    this.httpRequest.getProductList().subscribe(res=>this.urlProducts=res.products);
    // this.httpRequest.getProductList().subscribe(res=> console.log(res));
    console.log(this.urlProducts);
    // console.log(this.urlProducts[0].price);
    // console.log(this.urlProducts[0].title);
  }

  
  
}
