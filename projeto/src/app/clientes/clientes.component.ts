import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [];
  cliente: Cliente = {
    nome:"" ,
    idade: 0
  };

  addCliente(){
    this.clientes.push(this.cliente)
  };

  constructor() { 

  };

  ngOnInit() {
  };

};
