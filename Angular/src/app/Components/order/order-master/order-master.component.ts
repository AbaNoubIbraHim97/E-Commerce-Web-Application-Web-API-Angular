
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Icategory } from 'src/app/ViewModel/Classes/Interfaces/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit,AfterViewInit {
 CatList:Icategory[];
 @ViewChild('addS') elem:ElementRef;
 @ViewChild('ctL') element:ElementRef;
 
 CatID:number;
 TotalPricefrmParent:number;
  constructor() { 
    this.TotalPricefrmParent=0;
    // this.CatID=0;
    this.CatList=[{ID:1,Name:'Mobiles'},
                   {ID:2,Name:'Laptops'},
                   {ID:3,Name:'Tablates'}
                    ]
  }
 
  ngOnInit(): void {
    // this.element.nativeElement.style.color="red";
     console.log(this.elem.nativeElement.value)
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.style.color="red";
    console.log(this.elem.nativeElement.value)
  }

  TotalPriceInParent(totalprice:number){
    // console.log(` In Parent ${totalprice}`);
    this.TotalPricefrmParent=totalprice;
  }
   
}
