export class Cliente{
  nombreCliente          = '';
  cifCliente             = '';
  direccionCliente       = '';
  cuadroSelectorCliente  = '';

  constructor(nombreCliente:string, cifCliente:string, direccionCliente:string, cuadroSelectorCliente:any){
    this.nombreCliente = nombreCliente;
    this.cifCliente = cifCliente;
    this.direccionCliente = direccionCliente;
    this.cuadroSelectorCliente = cuadroSelectorCliente;
  }
}
