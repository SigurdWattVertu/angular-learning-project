import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

// This injectable decorater makes this a service
// It means that we are able to inject dependencies into it.
@Injectable({
  providedIn: 'root' // this means the SERVICE is available anywhere in application
})
export class CartService {

  // We are now storing a copy of the cart in our cartService as well as on the server

  // BehaviourSubject is another type of RXJS Observable to emit the latest value to NEW Subscribers
  private cart: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  // cart: IProduct[] = []

  constructor( private http: HttpClient) { }

  add(product: IProduct) {
    const newCart = [...this.cart.getValue(), product];
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('added ' + product.name + ' to cart!');
    });
  }
    
  getCart(): Observable<IProduct[]> {
    return this.cart.asObservable();
  }

  // add(product: IProduct) {
  //   const newCart = [...this.cart.getValue(), product];
  //   this.cart.next(newCart);
  //   this.http.post('/api/cart', newCart).subscribe(() => {
  //     console.log('added ' + product.name + ' to cart!');
  //   });
  // }

  remove(product: IProduct) {
    let newCart = this.cart.getValue().filter((i) => i !== product);
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('removed ' + product.name + ' from cart!');
    });
  }
}
