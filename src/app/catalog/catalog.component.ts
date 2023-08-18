import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
    selector: 'bot-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css']
})

export class CatalogComponent {
    product: IProduct;

    constructor(){
        this.product = {
            id: 2,
            description: 'hello desccription',
            name: 'the name ici',
            imageName: 'head-friendly.png',
            category: 'Heads',
            price: 845.0,
            discount: 0.2
        }
    }
}