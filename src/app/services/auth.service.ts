import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }

  singin(user:any){
    return this.http.post(' http://159.65.96.86:8080/services/auth/signin',user)
  }
}
