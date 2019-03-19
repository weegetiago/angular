import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  cliente: Cliente = {
    nome: "",
    idade: 0,
    peso: 0,
    valor: 0,
    data: '2019-08-08'
  }

  clientes:Array<Cliente>

  addCliente() {
    //A linha abaixo cria um novo objeto sempre que ela é executada
    let cli = Object.assign({}, this.cliente);
    this.clientes.push(cli); //lista os cadastros
  };

  constructor(private clienteService: ClienteService) { 
    this.clientes = this.clienteService.clientes
  }

  ngOnInit() {
  }

}
