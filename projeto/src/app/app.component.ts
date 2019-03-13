import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu APP';
  clientes:Array<Cliente> = [
    {
      nome: 'Weege',peso:90, idade: 25, valor: 50, data: '2018-01-01'
    }
  ];
}
