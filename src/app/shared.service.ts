import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  private url ='http://localhost:3000/'
  users: any[] =[];

  createNewUser(user: any){
     return this.http.post(this.url + 'user/register', user);
  }
}


