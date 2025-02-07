import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component'; 
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    {
        path: '', component: HomeComponent, title: 'Home'
    },
    {
        path:'product/:id', component:ProductdetailsComponent, title: 'product-details'
    },
    {
        path: 'checkout/:id', component: CheckoutComponent, title: 'Checkout' 
    },
    {
        path: 'cart', component: CartComponent, title: 'Cart' 

   },
   
];
