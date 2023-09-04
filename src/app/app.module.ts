import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from 'src/app/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from 'src/app/user/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms'; // This is how we add template driven forms to an angular app.

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent,
    CatalogComponent,
    ProductDetailsComponent,
    CartComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Importing this module so that we can make http calls
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
