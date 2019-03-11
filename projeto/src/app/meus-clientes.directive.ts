import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Cliente } from './cliente';

@Directive({
  selector: '[appMeusClientes]'
})
export class MeusClientesDirective {

  private _appMeusClientes: Cliente;

  constructor(private el:ElementRef) { 
    this.el.nativeElement.innerHTML += 'conteudo adicionado'
  }

  get meuCliente(){
    return this._appMeusClientes;
  }

  @Input()
  appMeusClientes: Cliente;

  @HostListener('click')
  onClick(){
    alert(this.appMeusClientes)
  }

  mudarCorCliente(){
    this.el.nativeElement.style.color = this.appMeusClientes.value > 30 ? 'green': 'red';
  }

}
