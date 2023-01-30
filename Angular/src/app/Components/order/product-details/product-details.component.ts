
import { ApiProductService } from './../../../Services/api-product.service';
import { Component, OnInit, Output, OnChanges } from '@angular/core';
import { Iproduct } from 'src/app/ViewModel/Classes/Interfaces/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { from, Observable } from 'rxjs';

import { Router } from '@angular/router';
import { ApiIproduct } from 'src/app/ViewModel/Classes/Interfaces/api-iproduct';
import { EventEmitter } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { NavComponent } from '../../nav/nav.component';












@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  // prd:IProduct;
  prdApi: ApiIproduct;
  pID: number;
  route: Router;
  TotalPrice: number;
  totalquantity: number;
  totalproduct: number;
  x:NavComponent;
  @Output() TotalProductChanged: EventEmitter<number>;
  @Output() counthange:EventEmitter<number>;
  totalorder: number;
  items: number;
  count: any;
  nav:NavComponent;
  constructor(private _actvivateRouterServ: ActivatedRoute,
    private _ApiprodServ: ApiProductService, private cartService: DataServiceService,
    private loc: Location
  ) {
    this.totalquantity = 0;
    this.totalproduct = 0;
    this.totalorder = 0;
    this.counthange=new EventEmitter<number>();
    this.TotalProductChanged = new EventEmitter<number>();
    this.items = 0;
  }
  ngOnChanges(): void {

  }

  ngOnInit(): void {
    this.pID = this._actvivateRouterServ.snapshot.params['pid'];
    //  this.prd=this._prodServ.getProductByID(this.pID);
    this._ApiprodServ.getProduct(this.pID).subscribe(
      (Response) => {
        console.log(Response);
        this.prdApi = Response
      },
      (err) => { console.log(err) }

    );



  }

  goBack() {
    this.loc.back();
  }

  private itemIsInCart(item: ApiIproduct, cart: ApiIproduct[]): boolean {
    return cart.find(_ => _.ID === item.ID) != null;
  }
  UpdatePrice(Pconut: number, availablequantity: number, pID) {
    console.log(availablequantity);
    console.log(pID);
    // availablequantity=this.prdApi.Quantity;

    //pID=this.prdApi.ID;

    this.prdApi = this.getbyid(pID);
    //this.TotalPrice+=Pconut*price;
    this.totalquantity = availablequantity;
    this.totalquantity -= Pconut;
    this.prdApi.Quantity = this.totalquantity;
    this.updateprod(this.prdApi);
    this.ngOnInit();
    console.log(this.totalquantity);
    this.items = this.items + Pconut;
    //this.getitems();


  }


  getbyid(pID): ApiIproduct {
    //this.pID=this._actvivateRouterServ.snapshot.params['pid'];
    //  this.prd=this._prodServ.getProductByID(this.pID);
    this._ApiprodServ.getProduct(pID).subscribe(
      (Response) => {
        console.log(Response);
        this.prdApi = Response
      },
      (err) => { console.log(err) }

    );


    return this.prdApi;


  }
 addToCart(prdApi,pcount:number) {
    this.cartService.addToCart(prdApi,pcount);
    
    window.alert('Your product has been added to the cart!');
 // this.items=this.cartService.getItems().length;

 this.items+=Number(pcount);
 this.nav.count=this.items;
  

  };




  updateprod(prdApi) {
    this._ApiprodServ.updateproduct(prdApi).subscribe(
      res => {
        this.route.navigate(['/ApiProducts']);
        this.ngOnInit()
      },
      err => console.log(err)
    )

  }

  public shoppingCartItems$: Observable<ApiIproduct[]>;



  /*getitems():ApiIproduct[]  {
    
      this.shoppingCartItems$ = this
        .cartService
        .getItems();
  
         this.shoppingCartItems$.subscribe(resp =>this. items);
    return this.items;
    }*/

}






