import { Component } from '@angular/core';

import { NavController, NavParams, Platform } from 'ionic-angular';

import { PopoverController} from 'ionic-angular/components/popover/popover-controller';

import { ApiProvider } from '../../providers/api/api';
import { PopoverComponent } from '../../components/popover/popover';


/**
 * Generated class for the CalculadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})

export class CalculadoraPage {
  pyg_value;
  usd_value;
  brl_value;
  eur_value;
  ars_value;

  isAndroid: boolean = false;
  title: string;
  sucursalSelect : string;

  JSONData : any;
  JSONApi : any = [];

  DECIMAL_SEPARATOR =",";
  GROUP_SEPARATOR =".";

  constructor(
    public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public apiJSON: ApiProvider, public popoverCtrl: PopoverController) {
    this.isAndroid      = platform.is('android');
    this.sucursalSelect = navParams.get('data');
  }  

  ionViewCanEnter() {
  }

  ionViewDidLoad() {
    this.getData(this.sucursalSelect);
  }

  ionViewWillEnter() {
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

  presentPopover(idEvent){
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: idEvent
    });

    popover.onDidDismiss(popoverData => {
      this.sucursalSelect = popoverData.id;
      this.getData(this.sucursalSelect);
      this.pyg_value  = 0;
      this.usd_value  = 0;
      this.brl_value  = 0;
      this.eur_value  = 0;
      this.ars_value  = 0;
    });
  }

  getData(idItem){
    this.apiJSON.getTablero().then(data => {

      switch(idItem) {
        case 'ASU': {
          this.title    = 'Casa Matriz';
          this.JSONApi  = data['asuncion'];
          break;
        }

        case 'VM': {
          this.title    = 'Villa Morra';
          this.JSONApi  = data['villamorra'];
          break;
        }
        
        case 'CDE': {
          this.title    = 'Ciudad del Este';
          this.JSONApi  = data['ciudaddeleste'];
          break;
        }
        
        case 'SDG': {
          this.title    = 'Salto del Guairá';
          this.JSONApi  = data['saltodelguaira'];
          break;
        }
  
        case 'SLO': {
          this.title    = 'San Lorenzo';
          this.JSONApi  = data['sanlorenzo'];
          break;
        }
        
        case 'KM4': {
          this.title    = 'CDE Km4';
          this.JSONApi  = data['km4'];
          break;
        }
        
        case 'ENC': {
          this.title    = 'Encarnación';
          this.JSONApi  = data['encarnacion'];
          break;
        }

        default: {
          this.title    = 'Casa Matriz';
          this.JSONApi  = data['asuncion'];
          break;
        }
      }
    });
  }

  onBlurCalcCambio(event){
    let monCam  = event._elementRef.nativeElement.id;
    let impCam  = parseInt(event._value.replace(/\./gi, ''));
    
    let usdCom  = this.JSONApi[0].compra.replace(/\./gi, '');
    let usdVen  = this.JSONApi[0].venta.replace(/\./gi, '');
    let brlCom  = this.JSONApi[1].compra.replace(/\./gi, '');
    let brlVen  = this.JSONApi[1].venta.replace(/\./gi, '');
    let eurCom  = this.JSONApi[2].compra.replace(/\./gi, '');
    let eurVen  = this.JSONApi[2].venta.replace(/\./gi, '');
    let arsCom  = this.JSONApi[3].compra.replace(/\./gi, '');
    let arsVen  = this.JSONApi[3].venta.replace(/\./gi, '');

    let brlUCom = this.JSONApi[4].compra.replace(/\./gi, '');
    let brlUVen = this.JSONApi[4].venta.replace(/\./gi, '');
    let eurUCom = this.JSONApi[5].compra.replace(/\./gi, '');
    let eurUVen = this.JSONApi[5].venta.replace(/\./gi, '');
    let arsUCom = this.JSONApi[6].compra.replace(/\./gi, '');
    let arsUVen = this.JSONApi[6].venta.replace(/\./gi, '');

    usdCom = usdCom.replace(/\,/gi, '.');
    usdVen = usdVen.replace(/\,/gi, '.');
    brlCom = brlCom.replace(/\,/gi, '.');
    brlVen = brlVen.replace(/\,/gi, '.');
    eurCom = eurCom.replace(/\,/gi, '.');
    eurVen = eurVen.replace(/\,/gi, '.');
    arsCom = arsCom.replace(/\,/gi, '.');
    arsVen = arsVen.replace(/\,/gi, '.');

    brlUCom = brlUCom.replace(/\,/gi, '.');
    brlUVen = brlUVen.replace(/\,/gi, '.');
    eurUCom = eurUCom.replace(/\,/gi, '.');
    eurUVen = eurUVen.replace(/\,/gi, '.');
    arsUCom = arsUCom.replace(/\,/gi, '.');
    arsUVen = arsUVen.replace(/\,/gi, '.');

    switch (monCam) {
      case 'pyg_value':
        this.usd_value  = this.formatNumber(((impCam / usdVen).toFixed(2)).replace(/\./gi, ','));
        this.brl_value  = this.formatNumber(((impCam / brlVen).toFixed(2)).replace(/\./gi, ','));
        this.eur_value  = this.formatNumber(((impCam / eurVen).toFixed(2)).replace(/\./gi, ','));
        this.ars_value  = this.formatNumber(((impCam / arsVen).toFixed(2)).replace(/\./gi, ','));
        break;

      case 'usd_value':
        this.pyg_value  = this.formatNumber(((impCam * usdCom).toFixed(2)).replace(/\./gi, ','));
        this.brl_value  = this.formatNumber(((impCam * brlUCom).toFixed(2)).replace(/\./gi, ','));
        this.eur_value  = this.formatNumber(((impCam / eurUVen).toFixed(2)).replace(/\./gi, ','));
        this.ars_value  = this.formatNumber(((impCam * arsUCom).toFixed(2)).replace(/\./gi, ','));
        break;

      case 'brl_value':
        this.pyg_value  = this.formatNumber(((impCam * brlCom).toFixed(2)).replace(/\./gi, ','));
        this.usd_value  = this.formatNumber(((impCam / brlUVen).toFixed(2)).replace(/\./gi, ','));
        this.eur_value  = this.formatNumber(((impCam * 0).toFixed(2)).replace(/\./gi, ','));
        this.ars_value  = this.formatNumber(((impCam * 0).toFixed(2)).replace(/\./gi, ','));
        break;

      case 'eur_value':
        this.pyg_value  = this.formatNumber(((impCam * eurCom).toFixed(2)).replace(/\./gi, ','));
        this.usd_value  = this.formatNumber(((impCam * eurUCom).toFixed(2)).replace(/\./gi, ','));
        this.brl_value  = this.formatNumber(((impCam * 0).toFixed(2)).replace(/\./gi, ','));
        this.ars_value  = this.formatNumber(((impCam * 0).toFixed(2)).replace(/\./gi, ','));
        break;

      case 'ars_value':
        this.pyg_value  = this.formatNumber(((impCam * arsCom).toFixed(2)).replace(/\./gi, ','));
        this.usd_value  = this.formatNumber(((impCam / arsUVen).toFixed(2)).replace(/\./gi, ','));
        this.brl_value  = this.formatNumber(((impCam * 0).toFixed(2)).replace(/\./gi, ','));
        this.eur_value  = this.formatNumber(((impCam * 0).toFixed(2)).replace(/\./gi, ','));
        break;
    }
  }

  onFocusCalcCambio(event) {
    let monCam      = event._elementRef.nativeElement.id;
    
    let idPYG       = document.getElementById('pyg_mon');
    let idUSD       = document.getElementById('usd_mon');
    let idBRL       = document.getElementById('brl_mon');
    let idEUR       = document.getElementById('eur_mon');
    let idARS       = document.getElementById('ars_mon');

    idPYG.innerHTML = ' Guaraní ';
    idUSD.innerHTML = ' Dólar Americano ';
    idBRL.innerHTML = ' Real Brasileño ';
    idEUR.innerHTML = ' EURO ';
    idARS.innerHTML = ' Peso Argentino ';

    switch (monCam) {
      case 'pyg_value':
        this.usd_value  = 0;
        this.brl_value  = 0;
        this.eur_value  = 0;
        this.ars_value  = 0;
        idPYG.innerHTML = ' Guaraní  <span style="color:#00944C; font-weight:bold;">(TENGO)</span>';
        break;

      case 'usd_value':
        this.pyg_value  = 0;
        this.brl_value  = 0;
        this.eur_value  = 0;
        this.ars_value  = 0;
        idUSD.innerHTML = ' Dólar Americano <span style="color:#00944C; font-weight:bold;">(TENGO)</span>';
        break;

      case 'brl_value':
        this.pyg_value  = 0;
        this.usd_value  = 0;
        this.eur_value  = 0;
        this.ars_value  = 0;
        idBRL.innerHTML = ' Real Brasileño <span style="color:#00944C; font-weight:bold;">(TENGO)</span>';
        break;

      case 'eur_value':
        this.pyg_value  = 0;
        this.usd_value  = 0;
        this.brl_value  = 0;
        this.ars_value  = 0;
        idEUR.innerHTML = ' EURO  <span style="color:#00944C; font-weight:bold;">(TENGO)</span>';
        break;

      case 'ars_value':
        this.pyg_value  = 0;
        this.usd_value  = 0;
        this.brl_value  = 0;
        this.eur_value  = 0;
        idARS.innerHTML = ' Peso Argentino <span style="color:#00944C; font-weight:bold;">(TENGO)</span>';
        break;
    }
  }

  formatNumber(valString) {
    if (!valString) {
      return '';
    }
    
    let val     = valString.toString();
    const parts = this.unFormatNumber(val).split(this.DECIMAL_SEPARATOR);
    
    return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR) + (!parts[1] ? '' : this.DECIMAL_SEPARATOR + parts[1]);
  };

  unFormatNumber(val) {
    if (!val) {
      return '';
    }
    val = val.replace(/^0+/, '');

    if (this.GROUP_SEPARATOR === '.') {
      return val.replace(/\./g, '');
    } else {
      return val.replace(/,/g, '');
    }
  };

}
