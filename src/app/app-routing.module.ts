import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent,
    title: "Home Page"
  },
  { 
    path: 'catalog',
    component: CatalogComponent,
    title: "Catalog"
  },
  { 
    path: 'cart',
    component: CartComponent,
    title: "Cart"
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
