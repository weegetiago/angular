import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  cliente: Cliente = {
    nome:"" ,
    idade: 0,
    peso: 0,
    valor: 0,
    data:'2019-08-08'
  }

  @Input()
  novoClientes=[];

  addCliente(){
    //A linha abaixo cria um novo objeto sempre que ela é executada
    let cli = Object.assign({}, this.cliente);
    this.novoClientes.push(cli); //lista os cadastros
  };

  constructor() { }

  ngOnInit() {
  }

}
