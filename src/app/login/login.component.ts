import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get username(){
    return this.formUser.get('username') as FormControl
  }

  get password(){
    return this.formUser.get('password') as FormControl
  }

  // form:FormGroup
  formUser  = new FormGroup({
    'password': new FormControl('',Validators.required),
    'username': new FormControl('',[Validators.required,Validators.email]) 
    

  })

  constructor( 
    private AuthService:AuthService,
    private router:Router,
    // private fb:FormBuilder
    ) { 
      // this.form = this.fb.group({
      //   username:['',[Validators.required,Validators.email]],
      //   password:['',[Validators.required, Validators.minLength(8)]]
      // })
    }

  ngOnInit(): void {
    
  }

//   {
//     password: pruebaSeleccion 
//     username: prueba.pass@gmail.com
// }
  // user = {
  //   password:"",
  //   username:""
  // }

  login(){
    console.log(this.formUser.value);
    
    this.AuthService.singin(this.formUser.value).subscribe((res:any) =>{
      console.log(res);
      
      localStorage.setItem('token',res.accessToken)
      this.router.navigate(['dashboard'])
      
    })
    
  }

}
