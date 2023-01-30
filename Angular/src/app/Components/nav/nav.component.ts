import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiProductComponent } from '../order/Products/api-product/api-product.component';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { ApiIproduct } from 'src/app/ViewModel/Classes/Interfaces/api-iproduct';
import { Observable } from 'rxjs';
import { ProductDetailsComponent } from '../order/product-details/product-details.component';
import { ActivatedRoute, Router } from '@angular/router';

type NewType = ActivatedRoute;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,OnChanges {
 totalcount:number;
  count:number;
  constructor( private cart:DataServiceService) {
   this.totalcount=0;
   this.count=0;
   
  }
  ngOnChanges() {
    this.count= this.cart.getcount();
  }
  ngOnInit(): void
  {
   
    this.count= this.cart.count;
      
  }
  updatecount(countvvv)
  {
    this.totalcount=countvvv;

  }
  firstComponentFunction(){    
    this.cart.onFirstComponentButtonClick();    
  }   
  }