import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  // Using an Input decorator on a variable of the component itself
  @Input() product!: IProduct; // Tells this child component that it CAN recieve data from it's parent
  @Output() buy = new EventEmitter(); 
  // Convention here is to use a present tense verb

  

  getDiscountedClasses(product: IProduct){
    if(product.discount > 0) return ['strikethrough'];
    else return [];
  }


  getImageUrl(product: IProduct){
    return 'assets/images/robot-parts/' + product.imageName
  }

  buyButtonClicked(product: IProduct){
    this.buy.emit()  // The emit method on the eventEmitter that we have created is how we trigger the event
  }

}
