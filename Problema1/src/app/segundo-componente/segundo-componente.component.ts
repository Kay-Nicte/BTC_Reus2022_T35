import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente.component';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent implements OnInit {
  @Input()
  listaClientes!: Cliente;

  @Input()
  indice!: number;

  constructor() {}

  ngOnInit(): void {}
}
