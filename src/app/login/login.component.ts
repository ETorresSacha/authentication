import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( 
    private AuthService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    
  }

//   {
//     password: pruebaSeleccion 
//     username: prueba.pass@gmail.com
// }
  user = {
    password:"",
    username:""
  }

  login(){
    this.AuthService.singin(this.user).subscribe((res:any) =>{ //!falta tipar
      localStorage.setItem('token',res.accessToken)
      this.router.navigate(['dashboard'])
      
    })
    
  }

}
