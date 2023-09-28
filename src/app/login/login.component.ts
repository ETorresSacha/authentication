import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private AuthService:AuthService) { }

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
    console.log(this.user);
    this.AuthService.singin(this.user).subscribe(res =>{
      console.log(res);
      
    })
    
  }

}
