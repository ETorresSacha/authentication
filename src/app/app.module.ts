
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
