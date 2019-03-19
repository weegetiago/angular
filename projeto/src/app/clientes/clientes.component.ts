import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Cliente>

  constructor(private clienteService: ClienteService) {
    this.clienteService.clientes.push();

    this.clientes = this.clienteService.clientes;

  };

  ngOnInit() {
  };

};
