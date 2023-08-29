import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

// This injectable decorater makes this a service
// It means that we are able to inject dependencies into it.
@Injectable({
  providedIn: 'root' // this means the SERVICE is available anywhere in application
})
export class CartService {

  cart: IProduct[] = []

  constructor( private http: HttpClient) { }

  add(product: IProduct) {
    this.cart.push(product)
    // As we have configured the server to deal with this URL it is going to work
    this.http.post('/api/cart', this.cart).subscribe(() => {
      console.log(product.name + 'added')
    })
    
    // when we pass this JS object to a post, it converts it into JSON and send to the server
    console.log('product added to array')
  }
}
