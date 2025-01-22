import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
      {
        path: '', 
        component: ProductsListComponent,
        title: 'Products list'
      },
  
      {
        path: 'product-details/:id',
        component:ProductDetailsComponent,
        title: 'details'
      },
      {
        path: 'signup',
        component: SignupComponent,
        title: 'register'
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'login'
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'cart'
      },
      {
        path: '**',
        component: NotfoundComponent,
        title: 'not found page'
      },
];
