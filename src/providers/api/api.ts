import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Storage } from '@ionic/storage';

import { Network } from '@ionic-native/network';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  URLApi;
  JSONApi;
  header;

  constructor(public httpClient: HttpClient, public network: Network, public storage: Storage) {
    this.header = new HttpHeaders();
    this.header.append('Access-Control-Allow-Origin', '*');
    this.header.append('Access-Control-Allow-Credentials', 'false');
    this.header.append('Access-Control-Allow-Methods', 'GET');
    this.header.append('Access-Control-Allow-Headers', '');
    this.header.append('accept', 'application/json');
    this.header.append('content-Type', 'application/json, charset=utf-8');
    this.header.append('cache-control', 'no-cache');
    this.header.append('cache-control', 'no-store');
    this.header.append('expire', '0');
    this.header.append('pragma', 'no-cache');
    this.header.append('if-modified-since', 'Sat, 1 Jan 2000 00:00:00 GMT');
  }

  getTablero() {
    let num     = Math.floor(Math.random() * 1000000) + 1;
    this.URLApi = 'https://cambiosalberdi.com/ws/getTablero2.json?';

    let temp     = this;
    temp.JSONApi = {
      "asuncion" : [
        {id: 'dolar_estadounidense', moneda: 'D\u00f3lar', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'real_brasileno', moneda: 'Real', imagen: 'real_brasileno.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso_argentino', moneda: 'Peso', imagen: 'peso_argentino.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "villamorra" : [
        {id: 'dolar_estadounidense', moneda: 'D\u00f3lar', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'real_brasileno', moneda: 'Real', imagen: 'real_brasileno.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso_argentino', moneda: 'Peso', imagen: 'peso_argentino.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "ciudaddeleste" : [
        {id: 'dolar_estadounidense', moneda: 'D\u00f3lar', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'real_brasileno', moneda: 'Real', imagen: 'real_brasileno.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso_argentino', moneda: 'Peso', imagen: 'peso_argentino.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "saltodelguaira" : [
        {id: 'dolar_estadounidense', moneda: 'D\u00f3lar', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'real_brasileno', moneda: 'Real', imagen: 'real_brasileno.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso_argentino', moneda: 'Peso', imagen: 'peso_argentino.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "sanlorenzo" : [
        {id: 'dolar_estadounidense', moneda: 'D\u00f3lar', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'real_brasileno', moneda: 'Real', imagen: 'real_brasileno.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso_argentino', moneda: 'Peso', imagen: 'peso_argentino.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "km4" : [
        {id: 'dolar_estadounidense', moneda: 'D\u00f3lar', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'real_brasileno', moneda: 'Real', imagen: 'real_brasileno.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso_argentino', moneda: 'Peso', imagen: 'peso_argentino.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "encarnacion" : [
        {id: 'dolar_estadounidense', moneda: 'D\u00f3lar', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'real_brasileno', moneda: 'Real', imagen: 'real_brasileno.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso_argentino', moneda: 'Peso', imagen: 'peso_argentino.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar_estadounidense.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ]
    };

    return new Promise(resolve => {
      this.httpClient.get(this.URLApi + num, {headers:this.header , observe: 'body'}).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(temp.JSONApi);
      });
    });
  }

  getGiro() {
    let num      = Math.floor(Math.random() * 1000000) + 1;
    this.URLApi  = 'https://cambiosalberdi.com/ws/getGiro.json?';
    
    let temp     = this;
    temp.JSONApi = {
      "data" : [
        {id: 1, ciudad: 'Asunción', imagen: 'assets/giro/ima01.jpg'},
        {id: 2, ciudad: 'Ciudad del Este', imagen: 'assets/giro/ima02.jpg'},
        {id: 3, ciudad: 'Salto del Guairá', imagen: 'assets/giro/ima03.jpg'},
        {id: 4, ciudad: 'Encarnación', imagen: 'assets/giro/ima04.jpg'}
      ]
    };

    return new Promise(resolve => {
      this.httpClient.get(this.URLApi + num, {headers:this.header , observe: 'body'}).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(temp.JSONApi);
      });
    });
  }

  getGiroDetalle() {
    let num      = Math.floor(Math.random() * 1000000) + 1;
    this.URLApi  = 'https://cambiosalberdi.com/ws/getGiroDetalle.json?';
    
    let temp     = this;
    temp.JSONApi = {
      "asuncion_pyg":[
          {id:'pyg_00',desde_hasta:'GUARANIES',destino_1:'CDE',destino_2:'ENC',destino_3:'SDG'},
          {id:'pyg_01',desde_hasta:'1 a 2.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_02',desde_hasta:'2.000.001 a 5.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_03',desde_hasta:'5.000.001 a 10.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_04',desde_hasta:'10.000.001 a 20.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_05',desde_hasta:'20.000.001 a 30.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_06',desde_hasta:'30.000.001 a 40.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_07',desde_hasta:'40.000.001 a 50.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_08',desde_hasta:'50.000.001 a 100.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_09',desde_hasta:'100.000.001 a 150.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_10',desde_hasta:'150.000.001 a 200.000.000',destino_1:'0',destino_2:'0',destino_3:'0'}
      ],
      "asuncion_usd":[
          {id:'usd_00',desde_hasta:'DOLAR',destino_1:'CDE',destino_2:'ENC',destino_3:'SDG'},
          {id:'usd_01',desde_hasta:'1 a 1.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_02',desde_hasta:'1.001 a 2.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_03',desde_hasta:'2.001 a 5.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_04',desde_hasta:'5.001 a 10.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_05',desde_hasta:'10.001 a 20.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_06',desde_hasta:'20.001 a 30.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_07',desde_hasta:'30.001 a 40.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_08',desde_hasta:'40.001 a 50.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_09',desde_hasta:'50.001 a 100.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_10',desde_hasta:'100.001 a 200.000',destino_1:'0',destino_2:'0',destino_3:'0'}
      ],
      "ciudaddeleste_pyg":[
          {id:'pyg_00',desde_hasta:'GUARANIES',destino_1:'ASU',destino_2:'ENC',destino_3:'SDG'},
          {id:'pyg_01',desde_hasta:'1 a 2.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_02',desde_hasta:'2.000.001 a 5.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_03',desde_hasta:'5.000.001 a 10.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_04',desde_hasta:'10.000.001 a 20.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_05',desde_hasta:'20.000.001 a 30.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_06',desde_hasta:'30.000.001 a 40.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_07',desde_hasta:'40.000.001 a 50.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_08',desde_hasta:'50.000.001 a 100.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_09',desde_hasta:'100.000.001 a 150.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_10',desde_hasta:'150.000.001 a 200.000.000',destino_1:'0',destino_2:'0',destino_3:'0'}
      ],
      "ciudaddeleste_usd":[
          {id:'usd_00',desde_hasta:'DOLAR',destino_1:'ASU',destino_2:'ENC',destino_3:'SDG'},
          {id:'usd_01',desde_hasta:'1 a 1.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_02',desde_hasta:'1.001 a 2.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_03',desde_hasta:'2.001 a 5.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_04',desde_hasta:'5.001 a 10.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_05',desde_hasta:'10.001 a 20.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_06',desde_hasta:'20.001 a 30.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_07',desde_hasta:'30.001 a 40.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_08',desde_hasta:'40.001 a 50.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_09',desde_hasta:'50.001 a 100.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_10',desde_hasta:'100.001 a 200.000',destino_1:'0',destino_2:'0',destino_3:'0'}
      ],
      "encarnacion_pyg":[
          {id:'pyg_00',desde_hasta:'GUARANIES',destino_1:'ASU',destino_2:'CDE',destino_3:'SDG'},
          {id:'pyg_01',desde_hasta:'1 a 2.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_02',desde_hasta:'2.000.001 a 5.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_03',desde_hasta:'5.000.001 a 10.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_04',desde_hasta:'10.000.001 a 20.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_05',desde_hasta:'20.000.001 a 30.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_06',desde_hasta:'30.000.001 a 40.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_07',desde_hasta:'40.000.001 a 50.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_08',desde_hasta:'50.000.001 a 100.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_09',desde_hasta:'100.000.001 a 150.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_10',desde_hasta:'150.000.001 a 200.000.000',destino_1:'0',destino_2:'0',destino_3:'0'}
      ],
      "encarnacion_usd":[
          {id:'usd_00',desde_hasta:'DOLAR',destino_1:'ASU',destino_2:'CDE',destino_3:'SDG'},
          {id:'usd_01',desde_hasta:'1 a 1.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_02',desde_hasta:'1.001 a 2.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_03',desde_hasta:'2.001 a 5.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_04',desde_hasta:'5.001 a 10.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_05',desde_hasta:'10.001 a 20.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_06',desde_hasta:'20.001 a 30.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_07',desde_hasta:'30.001 a 40.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_08',desde_hasta:'40.001 a 50.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_09',desde_hasta:'50.001 a 100.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_10',desde_hasta:'100.001 a 200.000',destino_1:'0',destino_2:'0',destino_3:'0'}
      ],
      "saltodelguaira_pyg":[
          {id:'pyg_00',desde_hasta:'GUARANIES',destino_1:'ASU',destino_2:'CDE',destino_3:'ENC'},
          {id:'pyg_01',desde_hasta:'1 a 2.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_02',desde_hasta:'2.000.001 a 5.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_03',desde_hasta:'5.000.001 a 10.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_04',desde_hasta:'10.000.001 a 20.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_05',desde_hasta:'20.000.001 a 30.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_06',desde_hasta:'30.000.001 a 40.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_07',desde_hasta:'40.000.001 a 50.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_08',desde_hasta:'50.000.001 a 100.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_09',desde_hasta:'100.000.001 a 150.000.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'pyg_10',desde_hasta:'150.000.001 a 200.000.000',destino_1:'0',destino_2:'0',destino_3:'0'}
      ],
      "saltodelguaira_usd":[
          {id:'usd_00',desde_hasta:'DOLAR',destino_1:'ASU',destino_2:'CDE',destino_3:'ENC'},
          {id:'usd_01',desde_hasta:'1 a 1.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_02',desde_hasta:'1.001 a 2.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_03',desde_hasta:'2.001 a 5.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_04',desde_hasta:'5.001 a 10.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_05',desde_hasta:'10.001 a 20.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_06',desde_hasta:'20.001 a 30.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_07',desde_hasta:'30.001 a 40.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_08',desde_hasta:'40.001 a 50.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_09',desde_hasta:'50.001 a 100.000',destino_1:'0',destino_2:'0',destino_3:'0'},
          {id:'usd_10',desde_hasta:'100.001 a 200.000',destino_1:'0',destino_2:'0',destino_3:'0'}
      ]
    };

    return new Promise(resolve => {
      this.httpClient.get(this.URLApi + num, {headers:this.header , observe: 'body'}).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(temp.JSONApi);
      });
    });
  }

  getServicio() {
    let num      = Math.floor(Math.random() * 1000000) + 1;
    this.URLApi  = 'https://cambiosalberdi.com/ws/getServicio.json?';

    let temp     = this;
    temp.JSONApi = {
      "data" : [
        {titulo: 'Compra, Venta y Arbitraje', descripcion: 'Con más de 29 años de experiencia damos el mejor servicio de compra, venta y arbitraje de divisas', imagen: 'assets/servicio/ima01.jpg'},
        {titulo: 'Giros Nacionales', descripcion: 'Realizamos giros a todo el país, con las mejores tarifas.', imagen: 'assets/servicio/ima02.jpg'},
        {titulo: 'Giros Internaciones', descripcion: 'Consulte por nuestros servicios de transferencias internacionales', imagen: 'assets/servicio/ima03.jpg'},
        {titulo: 'Aqui Pago', descripcion: 'Boca de Cobranzas', imagen: 'assets/servicio/ima04.jpg'},
        {titulo: 'Pago Express', descripcion: 'Boca de Cobranzas', imagen: 'assets/servicio/ima05.jpg'},
        {titulo: 'Bancard', descripcion: 'Todos los servicios podés abonarlos con tarjetas de créditos.', imagen: 'assets/servicio/ima06.jpg'}
      ]
    };

    return new Promise(resolve => {
      this.httpClient.get(this.URLApi + num, {headers:this.header , observe: 'body'}).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(temp.JSONApi);
      });
    });
  }

  getSucursal() {
    let num      = Math.floor(Math.random() * 1000000) + 1;
    this.URLApi  = 'https://cambiosalberdi.com/ws/getSucursal.json?';

    let temp     = this;
    temp.JSONApi = {
      "data" : [
        {sucursal: 'Casa Matriz', imagen: 'assets/sucursal/casa_matriz.jpg', ciudad: 'Asunción', direccion: 'Alberdi Nº 247 e/ Pte. Franco y Palma', telefono: '(021) 447.002', horario_lunes: 'Lunes a Viernes: 07:45 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'},
        {sucursal: 'Suc. Villa Morra', imagen: 'assets/sucursal/suc_villa_morra.jpg', ciudad: 'Asunción', direccion: 'Alberdi Nº 247 e/ Pte. Franco y Palma', telefono: '(021) 609.905', horario_lunes: 'Lunes a Viernes: 08:00 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'},
        {sucursal: 'Suc. Ciudad del Este', imagen: 'assets/sucursal/suc_ciudad_del_este.jpg', ciudad: 'Ciudad del Este', direccion: 'Monseñor Rodríguez esq. Pampliega', telefono: '(061) 500.135', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Suc. Salto del Guairá', imagen: 'assets/sucursal/suc_salto.jpg', ciudad: 'Salto del Guairá', direccion: 'Avda. Paraguay Nº 686 c/ Carlos Ricardo Mendes Goncalves', telefono: '(046) 243.158', horario_lunes: 'Lunes a Viernes: 08:00 a 16:00', horario_sabado: 'Sábados: 07:30 a 12:00'},
        {sucursal: 'Suc. Encarnación', imagen: 'assets/sucursal/suc_encarnacion.jpg', ciudad: 'Encarnación', direccion: 'Mcal. Estigarribia 1436 entre Villarica y Tomas R. Pereira', telefono: '(071) 200.826', horario_lunes: 'Lunes a Viernes: 07:45 a 17:00', horario_sabado: 'Sábados: 07:30 a 12:00'},
        {sucursal: 'Age. Rubio Ñu', imagen: 'assets/sucursal/age_rubio_nu.jpg', ciudad: 'Ciudad del Este', direccion: 'Rubio Ñu c/Monseñor Rodríguez', telefono: '(061) 512.493', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Age. Jebai', imagen: 'assets/sucursal/age_jebai.jpg', ciudad: 'Ciudad del Este', direccion: 'Regimiento Piribebuy e/ Monseñor Rodríguez y Adrián Jara – Local 3009/10 – Galería Jebai Center II', telefono: '(061) 506.060', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Age. Lai Lai', imagen: 'assets/sucursal/age_lailai.jpg', ciudad: 'Ciudad del Este', direccion: 'Adrian Jara esq. Itá Ybate – Salón Nº 1 Planta Baja – Galería Lai Lai', telefono: '(061) 501.362', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Age. Salto del Guairá', imagen: 'assets/sucursal/age_salto.jpg', ciudad: 'Salto del Guairá', direccion: 'Avda. Paraguay c/ Pedro Juan Caballero', telefono: '(061) 500.135', horario_lunes: 'Lunes a Viernes: 08:00 a 16:00', horario_sabado: 'Sábados: 07:30 a 12:00'},
        {sucursal: 'Age. Uniamerica', imagen: 'assets/sucursal/age_uniamerica.jpg', ciudad: 'Ciudad del Este', direccion: 'Avda. Itá Ybate – Galería Uniamerica', telefono: '(061) 511.392', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Age. San Lorenzo', imagen: 'assets/sucursal/age_san_lorenzo.jpg', ciudad: 'San Lorenzo', direccion: 'Julia Miranda Cueto c/ Mcal. Estigarribia', telefono: '(021) 571.215', horario_lunes: 'Lunes a Viernes: 08:00 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'},
        {sucursal: 'Age. KM4', imagen: 'assets/sucursal/age_km4.jpg', ciudad: 'Ciudad del Este', direccion: 'Super Carretera Fco Solano Lopez c/Fortin Pirizal', telefono: '(061) 571.540', horario_lunes: 'Lunes a Viernes: 08:00 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'}
      ]
    };
    
    return new Promise(resolve => {
      this.httpClient.get(this.URLApi + num, {headers:this.header , observe: 'body'}).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(temp.JSONApi);
      });
    });
  }

  getLogo() {
    let num      = Math.floor(Math.random() * 1000000) + 1;
    this.URLApi  = 'https://cambiosalberdi.com/ws/getLogo.json?';

    let temp     = this;
    temp.JSONApi = {
      "data" : [
        {id: 'logo', imagen: 'assets/logo/imgLogo.png'}
      ]
    };
    
    return new Promise(resolve => {
      this.httpClient.get(this.URLApi + num, {headers:this.header , observe: 'body'}).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(temp.JSONApi);
      });
    });
  }
}