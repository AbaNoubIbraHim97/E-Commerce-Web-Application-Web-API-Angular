import { Injectable } from '@angular/core';
import { Iproduct } from '../ViewModel/Classes/Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
PrdList:Iproduct[];
  constructor() { 
    this.PrdList=[{ID:1,Name:'Iphone 11 pro',Quntatity:4,Price:2600,CategoryID:1},
    {ID:2,Name:'Nokia',Quntatity:5,Price:1000,CategoryID:1} ,
    {ID:3,Name:'HP',Quntatity:8,Price:2600,CategoryID:2},
    {ID:4,Name:'Dell',Quntatity:9,Price:2000,CategoryID:2},
    {ID:5,Name:'Tab',Quntatity:4,Price:8000,CategoryID:3},
    {ID:6,Name:'IPod',Quntatity:8,Price:3000,CategoryID:3}
            ]
  }
  getALLProducts():Iproduct[]{
    return this.PrdList;
  }
  getProductByID(pID):Iproduct{
    return this.PrdList.find((prd)=>prd.ID==pID);
  }
  getProductsByCatID(catID):Iproduct[]{
    return this.PrdList.filter((prod)=>prod.CategoryID==catID)
   }

}
