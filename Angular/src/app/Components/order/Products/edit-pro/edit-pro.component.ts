import { Component, OnInit } from '@angular/core';
import { ApiIproduct } from 'src/app/ViewModel/Classes/Interfaces/api-iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductService } from 'src/app/Services/api-product.service';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {
  PID:number;
  prdApI:ApiIproduct;
  fileToUpload:File=null;
    constructor(private activeRoute:ActivatedRoute,
      private prdService:ApiProductService,private route:Router) { }
  
    ngOnInit(): void {
      this.PID=this.activeRoute.snapshot.params['pid']; 
      //this.prd=this.prdService.getAllProductByID(this.PID)
      this.prdService.getProduct(this.PID).subscribe(
         (Response)=>{
          console.log(Response); 
          this.prdApI=Response},
         (err)=>{console.log(err)}
  
      );
      
    }
  
    handFileInput(file:FileList)
    {
       this.fileToUpload=file.item(0);
  
  
  
       var reader=new FileReader();
       reader.onload=(event:any)=>{
  
      // this.imageUrl=event.target.result;
  
       }
       reader.readAsDataURL(this.fileToUpload);
         
    }
  
    Save(Name,Image,Description,Quantity,Price)
    {
  
      this.prdService.putfile(Name.value,this.fileToUpload,Description.value,Quantity.value,Price.value,this.prdApI).subscribe(
        data=>{console.log("done");
        Name.value=null;
        Image.value=null;
        this.route.navigateByUrl('/ApiProducts');}
  
  
      );
      
     
      
     }
  
      
  
    }
  