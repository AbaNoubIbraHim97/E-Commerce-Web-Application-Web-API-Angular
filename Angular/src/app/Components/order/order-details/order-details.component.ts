import { Iproduct } from 'src/app/ViewModel/classes/Interfaces/iproduct';
import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit,OnChanges {
  @Input() SelCatIDInChid:number;
  PrdList:Iproduct[];
  TotalPrice:number;
  @Output() TotalPriceChanged:EventEmitter<number>
   constructor(private _prodServ:ProductService,private route:Router) {
 
     this.TotalPriceChanged=new EventEmitter<number>();
     this.TotalPrice=0;
    
     console.log(` In constructor ${this.SelCatIDInChid}`)
    }
  
    ngOnChanges(): void {
     console.log(` In onChanges ${this.SelCatIDInChid}`)
      console.log(this.getProductsByCatID())
   }
   ngOnInit(): void {
     this.PrdList=this._prodServ.getALLProducts();
     console.log(` In ngOnInit ${this.SelCatIDInChid}`)
   }
 
   getProductsByCatID():Iproduct[]{
     return this._prodServ.getProductsByCatID(this.SelCatIDInChid);
   }
  
 
   UpdateTotalPrice(pcount:number,price:number){
     this.TotalPrice+=pcount*price;
     this.PrdList[1].Quntatity-=pcount;
     this.TotalPriceChanged.emit(this.TotalPrice);
     console.log(this.TotalPrice);
   }
   
   viewDetais(pID){
     this.route.navigate(['/Product',pID]);
   }
  
 
 }
    
