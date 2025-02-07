import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importa el componente raíz
import { HomeComponent } from './home/home.component'; // Importa otros componentes
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { routes } from './app.routes'; // Importa el módulo de rutas

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductdetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    routes 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
