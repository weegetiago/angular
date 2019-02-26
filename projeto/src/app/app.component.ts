import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu APP';
  clientes = [];
  cliente = "";

  addCliente(){
    this.clientes.push(this.cliente);
  }
}
