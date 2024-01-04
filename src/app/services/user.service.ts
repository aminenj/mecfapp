import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
   getUserFromPlaceholder(loginForm: any){
    let myData =this.http.post<any>("http://localhost:3000/user/login", loginForm)
    return myData;
  }
}
