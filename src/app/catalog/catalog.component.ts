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
    products: any; // Should be turning this into an IProducts Array...?
    filter: string = '';

    // Here we are injecting dependencies into the constructor, so we have access to it in this class
    // Good to inject things into the constructor here so we can do the same thing in our unit tests, called constructor injection
    constructor(private cartService: CartService, private productService: ProductService){
        
    }

    ngOnInit(){
        // This method returns an observable, so we need to call the subscribe method on it
        this.productService.getProducts().subscribe(products => {
            this.products = products;
        });
    }

    // User is clicking the buy button in product-details, this buy event gets emitted all the way to the Cart Service
    addToCart(product: IProduct) {
      this.cartService.add(product)
    }

    // It is interesting that when we press ALL get all ALL the products back, seems to me like that should maybe not work..
    getFilteredProducts(){
        return this.filter === ''
        ? this.products
        : this.products.filter((product: any) => product.category === this.filter );
    }
}

