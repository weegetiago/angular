import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @Input()
  clientes;

  constructor() { };

  ngOnInit() {
  };

};
