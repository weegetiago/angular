import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { MeusClientesDirective } from './meus-clientes.directive';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormatCurrencyPipe,
    FormatDatePipe,
    MeusClientesDirective,
    NovoClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
