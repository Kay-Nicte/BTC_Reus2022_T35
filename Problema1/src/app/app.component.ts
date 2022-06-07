import { Component } from '@angular/core';
import { Cliente } from './cliente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Problema1';
  nombre = '';
  cif = '';
  direccion = '';
  cuadroSelector = '';

  //Array dinámico de clientes
  cliente: Cliente[] = [
    new Cliente('Cliente1', 'B 123', 'C/ la la la', '1'),
    new Cliente('Cliente 2', 'B 334', 'Av. lo lo lo', '2'),
  ];

  //Función para añadir nuevos clientes al array "cliente[]" que he creado
  agregarCliente() {
    //Añadir un cliente nuevo
    let clienteNuevo = new Cliente(this.nombre, this.cif, this.direccion, this.cuadroSelector);
    //Meter el cliente que acabo de crear dentro del array cliente[]
    this.cliente.push(clienteNuevo);
  }
}
