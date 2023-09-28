import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor( 
    private router:Router
    ) { }

  logout(){
    Swal.fire({
      title: 'Alerta!',
      text: "¿Estas seguro de cerrar sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Fin de sesión'
        )
        localStorage.clear()
    this.router.navigate(['home'])
      }
    })
  }

}
