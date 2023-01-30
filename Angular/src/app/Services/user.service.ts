import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../ViewModel/Classes/Interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private ht:HttpClient) { }
  registeration(user:User)
  {
    return this.ht.post(`${environment.ApiURl}api/Account`,user);

  }
}
