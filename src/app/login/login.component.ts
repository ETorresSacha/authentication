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

  // FormGroup
  formUser  = new FormGroup({
    'password': new FormControl('',Validators.required),
    'username': new FormControl('',[Validators.required,Validators.email]) 
    

  })

  constructor( 
    private AuthService:AuthService,
    private router:Router,

    ) { }

  ngOnInit(): void {
    
  }

  login(){
    
    this.AuthService.singin(this.formUser.value).subscribe((res:any) =>{

    localStorage.setItem('token',res.accessToken)
    this.router.navigate(['dashboard'])
    })
    
  }

}
