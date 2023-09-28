import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {inject} from '@angular/core'

export const authGuard: CanActivateFn = (route, state) => {
  const usuarioEstaAutenticado= inject(AuthService)
  const router = inject(Router)
  
  if(!usuarioEstaAutenticado.isAuth()){
    console.log("Token no es valido");
    window.alert("Debe de registrarse")
    router.navigate(['login'])
    return false
    
  }

  return true;
};

