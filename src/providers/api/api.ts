import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  JSONApi;

  constructor(public http: HttpClient) {
    console.log('constructor API');
  }

  getCotizacion() {
    console.log('getCotizacion API');
    console.log(this.JSONApi.asuncion);
    return this.http.get('http://cambiosalberdi.com/ws/getCotizaciones.json');
  }
}