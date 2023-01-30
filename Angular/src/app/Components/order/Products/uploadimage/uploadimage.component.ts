import { Component, OnInit } from '@angular/core';
import { ApiProductService } from 'src/app/Services/api-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {
  imageUrl:string="";
  fileToUpload:File=null;
    constructor( private imageService:ApiProductService,private route:Router) { }
  
    ngOnInit(): void {
    }
  
    handFileInput(file:FileList)
    {
       this.fileToUpload=file.item(0);
  
  
  
       var reader=new FileReader();
       reader.onload=(event:any)=>{
  
       this.imageUrl=event.target.result;
  
       }
       reader.readAsDataURL(this.fileToUpload);
         
    }
  
    onsubmit(Name,Image,Description,Quantity,Price)
    {
  
       this.imageService.postfile(Name.value,this.fileToUpload,Description.value,Quantity.value,Price.value).subscribe(
       
       data=>{console.log("done");
       Name.value=null;
       Image.value=null;
       Description.value=null;
       Quantity.value=null;
       Price.value=null;
       
       this.route.navigateByUrl('/ApiProducts');
      
      } 
  
       );
  
    }
  
  }