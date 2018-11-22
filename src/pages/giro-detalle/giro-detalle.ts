import { Component } from '@angular/core';

import { NavController, NavParams, Platform } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the GiroDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-giro-detalle',
  templateUrl: 'giro-detalle.html',
})

export class GiroDetallePage {
  idSucursal = 1;
  isAndroid: boolean = false;
  title: string = "Asunción";
  JSONApiPYG;
  JSONApiUSD;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public apiJSON: ApiProvider) {
    this.isAndroid  = platform.is('android');
    this.idSucursal = navParams.get('data');
  }

  ionViewCanEnter() {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.apiJSON.getGiroDetalle().then(data => {
      switch (String(this.idSucursal)) {
        case '1':
          this.title      = 'Asunción';
          this.JSONApiPYG = data['asuncion_pyg'];
          this.JSONApiUSD = data['asuncion_usd'];
          break;

        case '2':
          this.title      = 'Ciudad del Este';
          this.JSONApiPYG = data['ciudaddeleste_pyg'];
          this.JSONApiUSD = data['ciudaddeleste_usd'];
          break;
        
        case '3':
          this.title      = 'Salto del Guairá';
          this.JSONApiPYG = data['saltodelguaira_pyg'];
          this.JSONApiUSD = data['saltodelguaira_usd'];
          break;

        case '4':
          this.title      = 'Encarnación';
          this.JSONApiPYG = data['encarnacion_pyg'];
          this.JSONApiUSD = data['encarnacion_usd'];
          break;

        default:
          this.title      = 'Asunción';
          this.JSONApiPYG = data['asuncion_pyg'];
          this.JSONApiUSD = data['asuncion_usd'];
          break;
      }
    });
  }

  ionViewDidEnter() {
  }

  ionViewCanLeave() {
  }
  
  ionViewWillLeave() {
  }

  ionViewDidLeave() {
  }

  ionViewWillUnload() {
  }
}
