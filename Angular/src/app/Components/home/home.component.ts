import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/ViewModel/Classes/Interfaces/iproduct';
import { Companyinfo } from 'src/app/ViewModel/Classes/companyinfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainproducts:Iproduct[]=[];
  cinfo:Companyinfo;
  isServicesDisplayed:boolean;

title="Abanoub";
  constructor() { 
    this.isServicesDisplayed=true;
    this.cinfo=new Companyinfo("abanoub",
    "http://placeimg.com/350/360/any",
     ['Seles','Marketing','HR'],1000000,new Date);
     this.mainproducts=[{ID:3,Name:'Iphone 7',Quntatity:0,Price:7000},
     {ID:8,Name:'Tab',Quntatity:1,Price:8000},
     {ID:9,Name:'Nokia',Quntatity:8,Price:3000}
   ]
  }
  Toggle(){
   
    this.isServicesDisplayed=!this.isServicesDisplayed;
   }

  ngOnInit(): void {
  }

}
