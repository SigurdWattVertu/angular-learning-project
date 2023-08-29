import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
    selector: 'bot-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})

export class CatalogComponent {
    products: any;
    filter: string = '';
    cart: IProduct[] = [];

    constructor(private carSvc: CartService, private productSvc: ProductService){
        
    }

    ngOnInit(){
        // This method returns an observable, so we need to call the subscribe method on it
        this.productSvc.getProducts().subscribe(products => {
            this.products = products;
        });
    }

    addToCart(product: IProduct) {
      this.carSvc.add(product)
      console.log('sdf')
    }

    getFilteredProducts(){
        return this.filter === ''
        ? this.products
        : this.products.filter((product: any) => product.category === this.filter );
    }
}

