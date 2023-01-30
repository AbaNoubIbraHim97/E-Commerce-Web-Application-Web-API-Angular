import { ApiProductService } from './../../../../Services/api-product.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ApiIproduct } from 'src/app/ViewModel/Classes/Interfaces/api-iproduct';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
 
  Prd:ApiIproduct;
 /* const addpro=new FormGroup({
    Name:new FormControl(''),
    Details:new FormControl(''),
    Price:new FormControl(''),
    Quantity:new FormControl(),
Image:new FormControl() } )*/



  constructor(private _ApiProdserv:ApiProductService,private route:Router) {
    this.Prd={   ID:0,   Name:'',  
      Description:'',    Price:null,
      Quantity:null,Image:''
     
    }
   }

  ngOnInit(): void {
  }
  OnSubmit()
  {

  }
 addProduct(){
   this._ApiProdserv.insertProduct(this.Prd).subscribe(
     res=>{this.route.navigate(['/ApiProducts']),
     console.log(res);
    },
     err=>console.log(err)
   )
  }
 /* onselectedfile(event){
    if(event.target.files.lenghth>0)
    {
      const file=event.target.files[0];
      this.addpro.get('Image').setValue(file);
    }
  }
  const formdata=new this.formdata*/
 

}
