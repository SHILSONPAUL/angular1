import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { HeaderComponent } from './header/header.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    AddProductComponent,
    HomeComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
