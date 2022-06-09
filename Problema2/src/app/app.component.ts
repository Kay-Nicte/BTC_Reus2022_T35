import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Problema2';
  nombre: string = '';
  email = '';
  mensaje = '';
  calculo = '';

  validarFormulario(): void {
    // let inputNombre: HTMLInputElement = document.querySelector('#nombre');

    // Variables
    let errores: string[] = [];

    // Validar el nombre (por si es unu número)
    if (isNaN(parseInt(this.nombre)))
      errores.push('El nombre no puede ser un número');

    // El nombre es obligatorio
    if (this.nombre === '') errores.push('El nombre es obligatorio');
  }
}
