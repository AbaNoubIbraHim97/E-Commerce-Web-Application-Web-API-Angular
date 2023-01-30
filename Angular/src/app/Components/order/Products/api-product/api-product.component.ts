import { ApiProductService } from './../../../../Services/api-product.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiIproduct } from 'src/app/ViewModel/Classes/Interfaces/api-iproduct';

import { Router, ActivatedRoute } from '@angular/router';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { ProductDetailsComponent } from '../../product-details/product-details.component';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-api-product',
  templateUrl: './api-product.component.html',
  styleUrls: ['./api-product.component.css']
})
export class ApiProductComponent implements OnInit ,AfterViewInit{
 private update:UpdateProductComponent;
  PrdList:ApiIproduct[];
  prdApi:ApiIproduct;
  prr:ApiIproduct;
 //pID:number;
  router: Router;
  TotalPrice:number;
  totalquantity: number;
  
  @ViewChild('Pcount') elem: ElementRef;

 
 items:number;
count:number;
  constructor(private _ApiPrdServ:ApiProductService, private route:Router,private _actvivateRouterServ:ActivatedRoute,private cart:DataServiceService) {
   
     
     this.count= this.cart.count;
    this.TotalPrice=0;
    this.totalquantity=0;
    this.items=0;
   
  }
  ngAfterViewInit(): void {
  console.log(`test ${ this.elem.nativeElement.value}`);
  }
;
   


  ngOnInit(): void {
   
     this._ApiPrdServ.
     getAllProducts().subscribe(
       res=>this.PrdList=res,
       err=>console.log(err)
   
       
     );
     this.count= this.cart.count;

  }
 
/* DeletePro(pId:number){
  this._ApiPrdServ.DeleteProduct(pId).
  subscribe(res=>{
    console.log(res);
   this.ngOnInit();
    
this.route.navigate(['/ApiProducts'])
  },
  err=>{console.log(err)}

  );
 
}*/
addToCart(prdApi,pcount:number) {
  this.cart.addToCart(prdApi,pcount);
  
  window.alert('Your product has been added to the cart!');
// this.items=this.cartService.getItems().length;

this.items+=Number(pcount);
this.ngOnInit();



};
updateprod(prdApi)
{
  this._ApiPrdServ.updateproduct(prdApi).subscribe(
    res=>{this.route.navigate(['/ApiProducts']);
    this.ngOnInit()},
    err=>console.log(err)
  )

}
getbyid(id:number): ApiIproduct {
  //this.pID=this._actvivateRouterServ.snapshot.params['pid'];
  //  this.prd=this._prodServ.getProductByID(this.pID);
  this._ApiPrdServ.getProduct(id).subscribe(
    (Response) => {
      console.log(Response);
      this.prdApi = Response
    },
    (err) => { console.log(err) }

  );


  return this.prdApi;


}
UpdatePrice(Pconut:number,price:number,pID:number)
{
  
  this.prr= this.getbyid(pID);
  this.TotalPrice+=Pconut*price;
  this.totalquantity=this.prr.Quantity;
  this.totalquantity-= Pconut;
  this.prr.Quantity=Number(this.totalquantity);
  this.updateprod(this.prr);
this.addToCart(pID,Pconut);
  //this.ngOnInit();
 /* this.totalquantity=0;
  Pconut=0;
  this.prr.Quantity=0;
*/
};


}

