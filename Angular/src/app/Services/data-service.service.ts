import {Injectable, EventEmitter} from '@angular/core';

import {BehaviorSubject, Observable, Subject, Subscriber, Subscription} from 'rxjs';
import { ApiIproduct } from '../ViewModel/Classes/Interfaces/api-iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  items = [];
count:number;
invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription;
  constructor() {
   this.count=0;
   
  }
  addToCart(product,countnumber:number) {
    this.items.push(product);
    this.count+=Number(countnumber);
  }
  getcount()
  {
    return this.count;
  }


  getItems() {
    return this.items;
  }
  

  clearCart() {
    this.items = [];
    return this.items;
  }
  onFirstComponentButtonClick() {    
    this.invokeFirstComponentFunction.emit();    
  } 
}

  

  