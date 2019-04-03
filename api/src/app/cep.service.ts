import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpclient:HttpClient) { }

  buscar(cep:string){
    this.httpclient.get(`https://viacep.com.br/ws/${cep}/json/`)
    .subscribe((result:any) => {
      console.log(result)
    })
  }
}


//20921-060, 89012-375, e 89120-000