import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiIproduct } from '../ViewModel/Classes/Interfaces/api-iproduct';
import { Iproduct } from '../ViewModel/Classes/Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private _http: HttpClient) { }
  getAllProducts(): Observable<ApiIproduct[]> {

    return this._http.get<ApiIproduct[]>(`${environment.ApiURl}api/products`);
  }
  getProduct(PID): Observable<ApiIproduct> {
    return this._http.get<ApiIproduct>(`${environment.ApiURl}api/Products/${PID}`)
  }
  DeleteProduct(PID) {
    return this._http.delete(`${environment.ApiURl}api/products/${PID}`)
  }
  updateproduct(prod: ApiIproduct): Observable<ApiIproduct> {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
      // ,'Authorization': 'my-auth-token'
    });
    return this._http.put<ApiIproduct>(`${environment.ApiURl}api/updateprod/${prod.ID}`, prod, { headers: httpOptions })
  }

  insertProduct(Prd: ApiIproduct): Observable<ApiIproduct> {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
      // ,'Authorization': 'my-auth-token'
    });
    return this._http.post<ApiIproduct>(`${environment.ApiURl}api/Products/PostProduct`, Prd, { headers: httpOptions })
  }

  postfile(Name:string,fileToUpload:File,Description:string,Quantity:number,Price:number)
  {
    const endpoint=`${environment.ApiURl}/api/Upload`;
    const formData:FormData=new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);
    formData.append('Name',Name);
    formData.append('Description',Description);
    formData.append('Quantity',Quantity.toString());
    formData.append('Price',Price.toString());
    return this._http.post(endpoint,formData);
  }
  putfile(Name:string,fileToUpload:File,Description:string,Quantity:string,Price:string,Prd:ApiIproduct)
  {
   const endpoint=`${environment.ApiURl}api/Products/${Prd.ID}`;
   const formData:FormData=new FormData();
   formData.append('Image',fileToUpload,fileToUpload.name);
   formData.append('Name',Name);
   formData.append('Description',Description);
    formData.append('Quantity',Quantity);
    formData.append('Price',Price);

   return this._http.put(endpoint,formData);


  }

}
