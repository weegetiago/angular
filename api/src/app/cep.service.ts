import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from './cep';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpclient: HttpClient) { }

  buscar(cep: string) {
    return new Promise((resolve, reject) => {
      this.httpclient.get(`https://viacep.com.br/ws/${cep}/json/`)
        .subscribe((result: any) => {
          console.log(cep)
          resolve(this.recuperaDados(result))
        },
          (error) => {
            reject(error);
          })
    })
  }

  recuperaDados(cepRes): Cep {
    let cep = new Cep();
    cep.cep = cepRes.cep;
    cep.logradouro = cepRes.logradouro;
    cep.complemento = cepRes.complemento;
    cep.bairro = cepRes.bairro;
    cep.localidade = cepRes.localidade;
    cep.uf = cepRes.uf;
    cep.numero = '132';
    return cep;
  }

}


//20921060, 01001000, 89012375, e 89120000