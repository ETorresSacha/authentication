import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {inject} from '@angular/core'
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  const usuarioEstaAutenticado= inject(AuthService)
  const router = inject(Router)
  
  if(!usuarioEstaAutenticado.isAuth()){
    Swal.fire({
      title: '¡ATENCIÓN!',
      text: 'Debe iniciar sesión',
      icon: 'info',
      confirmButtonText: 'Aceptar',
      timer: 3000
    });
    
    router.navigate(['login'])
    return false
    
  }

  return true;
};

