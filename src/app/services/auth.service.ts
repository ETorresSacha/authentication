import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    private http:HttpClient,
    private jwtHelper:JwtHelperService
    ) { }

  singin(user:any){
    return this.http.post(' http://159.65.96.86:8080/services/auth/signin',user)
  }

  isAuth():boolean{
    const token = localStorage.getItem('token')
    if( this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){ // verifica si el token esta exipirado o no exite
      return false
    }
    return true
  }
}
