
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Modules
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

//Providers
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { authGuard } from './guards/auth.guard';

//RUTAS
const routes: Routes = [
  {path:'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
