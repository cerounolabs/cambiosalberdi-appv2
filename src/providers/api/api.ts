import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Network } from "@ionic-native/network";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  JSONApi;

  constructor(public httpClient: HttpClient, public network: Network) {
  }

  getTablero() {
    console.log('getTablero');
    this.network.onConnect().subscribe(() => {
      this.JSONApi = this.httpClient.get('http://cambiosalberdi.com/ws/getCotizaciones.json');
    });
    
    this.network.onDisconnect().subscribe(() => {
      this.JSONApi = {
        "asuncion" : [
          {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
          {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
          {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
        ],
        "villamorra" : [
          {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
          {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
          {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
        ],
        "ciudaddeleste" : [
          {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
          {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
          {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
        ],
        "saltodelguaira" : [
          {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
          {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
          {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
        ],
        "sanlorenzo" : [
          {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
          {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
          {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
        ],
        "km4" : [
          {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
          {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
          {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
        ],
        "encarnacion" : [
          {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
          {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
          {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
          {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
        ]
      };
    });

    this.JSONApi = {
      "asuncion" : [
        {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "villamorra" : [
        {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "ciudaddeleste" : [
        {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "saltodelguaira" : [
        {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "sanlorenzo" : [
        {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "km4" : [
        {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ],
      "encarnacion" : [
        {id: 'dolar', moneda: 'D\u00f3lar', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'real', moneda: 'Real', imagen: 'real.png', compra: '0,00', venta: '0,00'},
        {id: 'euro', moneda: 'Euro', imagen: 'euro.png', compra: '0,00', venta: '0,00'},
        {id: 'peso', moneda: 'Peso', imagen: 'peso.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real', moneda: 'D\u00f3lar x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_euro', moneda: 'D\u00f3lar x Euro', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_peso', moneda: 'D\u00f3lar x Peso', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_cheque', moneda: 'D\u00f3lar Cheque', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'dolar_real_cheque', moneda: 'D\u00f3lar Cheque x Real', imagen: 'dolar.png', compra: '0,00', venta: '0,00'},
        {id: 'timer', moneda: '\u00daltima Actualizaci\u00f3n', imagen: 'timer.png', compra: '00/00/0000', venta: '00:00:00'}
      ]
    };

    return this.JSONApi;
  }

  getGiro() {
    this.network.onDisconnect().subscribe(() => {
      this.JSONApi = this.httpClient.get('http://cambiosalberdi.com/ws/getGiros.json');
    });
    
    this.network.onConnect().subscribe(() => {
      this.JSONApi = [
        {ciudad: 'Asunción', imagen: 'assets/giro/ima01.jpg'},
        {ciudad: 'Ciudad del Este', imagen: 'assets/giro/ima02.jpg'},
        {ciudad: 'Salto del Guairá', imagen: 'assets/giro/ima03.jpg'},
        {ciudad: 'Encarnación', imagen: 'assets/giro/ima04.jpg'}
      ];
    });
    
    this.JSONApi = [
      {ciudad: 'Asunción', imagen: 'assets/giro/ima01.jpg'},
      {ciudad: 'Ciudad del Este', imagen: 'assets/giro/ima02.jpg'},
      {ciudad: 'Salto del Guairá', imagen: 'assets/giro/ima03.jpg'},
      {ciudad: 'Encarnación', imagen: 'assets/giro/ima04.jpg'}
    ];

    return this.JSONApi;
  }

  getServicio() {
    this.network.onDisconnect().subscribe(() => {
      this.JSONApi = this.httpClient.get('http://cambiosalberdi.com/ws/getServicios.json');
    });

    this.network.onConnect().subscribe(() => {
      this.JSONApi = [
        {titulo: 'Compra, Venta y Arbitraje', descripcion: 'Con más de 29 años de experiencia damos el mejor servicio de compra, venta y arbitraje de divisas', imagen: 'assets/servicio/ima01.jpg'},
        {titulo: 'Giros Nacionales', descripcion: 'Realizamos giros a todo el país, con las mejores tarifas.', imagen: 'assets/servicio/ima02.jpg'},
        {titulo: 'Giros Internaciones', descripcion: 'Consulte por nuestros servicios de transferencias internacionales', imagen: 'assets/servicio/ima03.jpg'},
        {titulo: 'Aqui Pago', descripcion: 'Bonca de Cobranzas', imagen: 'assets/servicio/ima04.jpg'},
        {titulo: 'Pago Express', descripcion: 'Boca de Cobranzas', imagen: 'assets/servicio/ima05.jpg'},
        {titulo: 'Bancard', descripcion: 'Todos los servicios podés abonarlos con tarjetas de créditos.', imagen: 'assets/servicio/ima06.jpg'}
      ];
    });

    this.JSONApi = [
      {titulo: 'Compra, Venta y Arbitraje', descripcion: 'Con más de 29 años de experiencia damos el mejor servicio de compra, venta y arbitraje de divisas', imagen: 'assets/servicio/ima01.jpg'},
      {titulo: 'Giros Nacionales', descripcion: 'Realizamos giros a todo el país, con las mejores tarifas.', imagen: 'assets/servicio/ima02.jpg'},
      {titulo: 'Giros Internaciones', descripcion: 'Consulte por nuestros servicios de transferencias internacionales', imagen: 'assets/servicio/ima03.jpg'},
      {titulo: 'Aqui Pago', descripcion: 'Bonca de Cobranzas', imagen: 'assets/servicio/ima04.jpg'},
      {titulo: 'Pago Express', descripcion: 'Boca de Cobranzas', imagen: 'assets/servicio/ima05.jpg'},
      {titulo: 'Bancard', descripcion: 'Todos los servicios podés abonarlos con tarjetas de créditos.', imagen: 'assets/servicio/ima06.jpg'}
    ];

    return this.JSONApi;
  }

  getSucursal() {
    this.network.onDisconnect().subscribe(() => {
      this.JSONApi = this.httpClient.get('http://cambiosalberdi.com/ws/getSucursales.json');
    });
   
    this.network.onConnect().subscribe(() => {
      this.JSONApi = [
        {sucursal: 'Casa Matriz', imagen: 'assets/sucursal/casa_matriz.jpg', ciudad: 'Asunción - Paraguay', direccion: 'Alberdi Nº 247 e/ Pte. Franco y Palma', telefono: '(021) 447.002', horario_lunes: 'Lunes a Viernes: 07:45 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'},
        {sucursal: 'Suc. Villa Morra', imagen: 'assets/sucursal/suc_villa_morra.jpg', ciudad: 'Asunción - Paraguay', direccion: 'Alberdi Nº 247 e/ Pte. Franco y Palma', telefono: '(021) 609.905', horario_lunes: 'Lunes a Viernes: 08:00 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'},
        {sucursal: 'Suc. Ciudad del Este', imagen: 'assets/sucursal/suc_ciudad_del_este.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Monseñor Rodríguez esq. Pampliega', telefono: '(061) 500.135', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Suc. Salto del Guairá', imagen: 'assets/sucursal/suc_salto.jpg', ciudad: 'Salto del Guairá - Paraguay', direccion: 'Avda. Paraguay Nº 686 c/ Carlos Ricardo Mendes Goncalves', telefono: '(046) 243.158', horario_lunes: 'Lunes a Viernes: 08:00 a 16:00', horario_sabado: 'Sábados: 07:30 a 12:00'},
        {sucursal: 'Suc. Encarnación', imagen: 'assets/sucursal/suc_encarnacion.jpg', ciudad: 'Encarnación - Paraguay', direccion: 'Mcal. Estigarribia 1436 entre Villarica y Tomas R. Pereira', telefono: '(071) 200.826', horario_lunes: 'Lunes a Viernes: 07:45 a 17:00', horario_sabado: 'Sábados: 07:30 a 12:00'},
        {sucursal: 'Age. Rubio Ñu', imagen: 'assets/sucursal/age_rubio_nu.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Rubio Ñu c/Monseñor Rodríguez', telefono: '(061) 512.493', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Age. Jebai', imagen: 'assets/sucursal/age_jebai.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Regimiento Piribebuy e/ Monseñor Rodríguez y Adrián Jara – Local 3009/10 – Galería Jebai Center II', telefono: '(061) 506.060', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Age. Lai Lai', imagen: 'assets/sucursal/age_lailai.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Adrian Jara esq. Itá Ybate – Salón Nº 1 Planta Baja – Galería Lai Lai', telefono: '(061) 501.362', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Age. Salto del Guairá', imagen: 'assets/sucursal/age_salto.jpg', ciudad: 'Salto del Guairá - Paraguay', direccion: 'Avda. Paraguay c/ Pedro Juan Caballero', telefono: '(061) 500.135', horario_lunes: 'Lunes a Viernes: 08:00 a 16:00', horario_sabado: 'Sábados: 07:30 a 12:00'},
        {sucursal: 'Age. Uniamerica', imagen: 'assets/sucursal/age_uniamerica.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Avda. Itá Ybate – Galería Uniamerica', telefono: '(061) 511.392', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
        {sucursal: 'Age. San Lorenzo', imagen: 'assets/sucursal/age_san_lorenzo.jpg', ciudad: 'San Lorenzo - Paraguay', direccion: 'Julia Miranda Cueto c/ Mcal. Estigarribia', telefono: '(021) 571.215', horario_lunes: 'Lunes a Viernes: 08:00 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'},
        {sucursal: 'Age. KM4', imagen: 'assets/sucursal/age_km4.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Super Carretera Fco Solano Lopez c/Fortin Pirizal', telefono: '(061) 571.540', horario_lunes: 'Lunes a Viernes: 08:00 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'}
      ];
    });

    this.JSONApi = [
      {sucursal: 'Casa Matriz', imagen: 'assets/sucursal/casa_matriz.jpg', ciudad: 'Asunción - Paraguay', direccion: 'Alberdi Nº 247 e/ Pte. Franco y Palma', telefono: '(021) 447.002', horario_lunes: 'Lunes a Viernes: 07:45 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'},
      {sucursal: 'Suc. Villa Morra', imagen: 'assets/sucursal/suc_villa_morra.jpg', ciudad: 'Asunción - Paraguay', direccion: 'Alberdi Nº 247 e/ Pte. Franco y Palma', telefono: '(021) 609.905', horario_lunes: 'Lunes a Viernes: 08:00 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'},
      {sucursal: 'Suc. Ciudad del Este', imagen: 'assets/sucursal/suc_ciudad_del_este.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Monseñor Rodríguez esq. Pampliega', telefono: '(061) 500.135', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
      {sucursal: 'Suc. Salto del Guairá', imagen: 'assets/sucursal/suc_salto.jpg', ciudad: 'Salto del Guairá - Paraguay', direccion: 'Avda. Paraguay Nº 686 c/ Carlos Ricardo Mendes Goncalves', telefono: '(046) 243.158', horario_lunes: 'Lunes a Viernes: 08:00 a 16:00', horario_sabado: 'Sábados: 07:30 a 12:00'},
      {sucursal: 'Suc. Encarnación', imagen: 'assets/sucursal/suc_encarnacion.jpg', ciudad: 'Encarnación - Paraguay', direccion: 'Mcal. Estigarribia 1436 entre Villarica y Tomas R. Pereira', telefono: '(071) 200.826', horario_lunes: 'Lunes a Viernes: 07:45 a 17:00', horario_sabado: 'Sábados: 07:30 a 12:00'},
      {sucursal: 'Age. Rubio Ñu', imagen: 'assets/sucursal/age_rubio_nu.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Rubio Ñu c/Monseñor Rodríguez', telefono: '(061) 512.493', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
      {sucursal: 'Age. Jebai', imagen: 'assets/sucursal/age_jebai.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Regimiento Piribebuy e/ Monseñor Rodríguez y Adrián Jara – Local 3009/10 – Galería Jebai Center II', telefono: '(061) 506.060', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
      {sucursal: 'Age. Lai Lai', imagen: 'assets/sucursal/age_lailai.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Adrian Jara esq. Itá Ybate – Salón Nº 1 Planta Baja – Galería Lai Lai', telefono: '(061) 501.362', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
      {sucursal: 'Age. Salto del Guairá', imagen: 'assets/sucursal/age_salto.jpg', ciudad: 'Salto del Guairá - Paraguay', direccion: 'Avda. Paraguay c/ Pedro Juan Caballero', telefono: '(061) 500.135', horario_lunes: 'Lunes a Viernes: 08:00 a 16:00', horario_sabado: 'Sábados: 07:30 a 12:00'},
      {sucursal: 'Age. Uniamerica', imagen: 'assets/sucursal/age_uniamerica.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Avda. Itá Ybate – Galería Uniamerica', telefono: '(061) 511.392', horario_lunes: 'Lunes a Viernes: 07:00 a 16:00', horario_sabado: 'Sábados: 07:00 a 12:00'},
      {sucursal: 'Age. San Lorenzo', imagen: 'assets/sucursal/age_san_lorenzo.jpg', ciudad: 'San Lorenzo - Paraguay', direccion: 'Julia Miranda Cueto c/ Mcal. Estigarribia', telefono: '(021) 571.215', horario_lunes: 'Lunes a Viernes: 08:00 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'},
      {sucursal: 'Age. KM4', imagen: 'assets/sucursal/age_km4.jpg', ciudad: 'Ciudad del Este - Paraguay', direccion: 'Super Carretera Fco Solano Lopez c/Fortin Pirizal', telefono: '(061) 571.540', horario_lunes: 'Lunes a Viernes: 08:00 a 17:00', horario_sabado: 'Sábados: 08:00 a 12:00'}
    ];
    
    return this.JSONApi;
  }
}