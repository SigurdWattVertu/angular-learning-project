import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';


// This injectable decorater makes this a service
@Injectable({
  providedIn: 'root' // this means the service is available anywhere in application
})
export class CartService {

  cart: IProduct[] = []

  constructor() { }

  add(product: IProduct) {
    this.cart.push(product)
    console.log('product added to array')
  }
}
