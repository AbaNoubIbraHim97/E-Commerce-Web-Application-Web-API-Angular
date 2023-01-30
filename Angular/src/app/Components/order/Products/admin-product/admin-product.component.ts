import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductService } from 'src/app/Services/api-product.service';
import { ApiIproduct } from 'src/app/ViewModel/Classes/Interfaces/api-iproduct';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  PrdList:ApiIproduct[];
  popoverTitle :string; 
  popoverMessage :string
  confirmClicked :boolean;
  cancelClicked :boolean;

  constructor(private _ApiPrdServ: ApiProductService, private route: Router, private _actvivateRouterServ: ActivatedRoute) {
    this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Are you sure to delete ';
    this.confirmClicked = false;
     this.cancelClicked = false;
   }

  ngOnInit(): void {
   
    this._ApiPrdServ.
    getAllProducts().subscribe(
      res=>this.PrdList=res,
      err=>console.log(err)
  
      
    );
  

 }


  DeletePro(pId: number) {
    this._ApiPrdServ.DeleteProduct(pId).
      subscribe(res => {
        console.log(res);
        this.ngOnInit();

        // this.route.navigate(['/ApiProducts'])
      })
    }
  
}

