import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMeusClientes]'
})
export class MeusClientesDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.innerHTML += 'conteudo adicionado'
  }

}
