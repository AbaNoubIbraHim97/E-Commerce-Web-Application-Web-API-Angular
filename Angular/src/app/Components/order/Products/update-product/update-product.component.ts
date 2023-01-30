import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiProductService } from 'src/app/Services/api-product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiIproduct } from 'src/app/ViewModel/Classes/Interfaces/api-iproduct';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
pid:number;
prod:ApiIproduct;
@ViewChild('modal') mdlConfirm:any;
  constructor(private _ApiProdserv:ApiProductService,private _actvivateRouterServ:ActivatedRoute, private route:Router) { }
  
  ngOnInit(): void {
    this.pid=this._actvivateRouterServ.snapshot.params['pid'];
    this._ApiProdserv.getProduct(this.pid).subscribe(
      (Response)=>{
       console.log(Response); 
       this.prod=Response},
      (err)=>{console.log(err)}

   );

  }
  updateprod()
{
  this._ApiProdserv.updateproduct(this.prod).subscribe(
    res=>this.route.navigate(['/ApiProducts']),
    err=>console.log(err)
  )

}}
