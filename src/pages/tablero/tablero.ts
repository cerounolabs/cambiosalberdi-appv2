import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { PopoverController} from 'ionic-angular/components/popover/popover-controller';

import { CalculadoraPage } from '../calculadora/calculadora';
import { ApiProvider } from '../../providers/api/api';
import { PopoverComponent } from '../../components/popover/popover';

/**
 * Generated class for the TableroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-tablero',
  templateUrl: 'tablero.html',
})

export class TableroPage {
  isAndroid: boolean      = false;
  title: string           = 'Casa Matriz';
  sucursalSelect : string = 'ASU';
  updateLast : string     = '00/00/0000 00:00:00';
  auxIma_1: string        = '';
  beforeIma_1: string     = 'assets/flag/dolar.png';
  afterIma_1: string      = 'assets/flag/real.png';
  auxIma_2: string        = '';
  beforeIma_2: string     = 'assets/flag/dolar.png';
  afterIma_2: string      = 'assets/flag/euro.png';
  auxIma_3: string        = '';
  beforeIma_3: string     = 'assets/flag/dolar.png';
  afterIma_3: string      = 'assets/flag/peso.png';
  auxIma_4: string        = '';
  beforeIma_4: string     = 'assets/flag/dolar.png';
  afterIma_4: string      = 'assets/flag/real.png';

  imageInterval;
  loadingInterval;
  loadingSpinner;
  JSONData;
  JSONApi;
  
  constructor(
    public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public apiJSON: ApiProvider, public loadingCtrl: LoadingController, public popoverCtrl: PopoverController) {
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
  }

  ionViewDidLoad() {
    this.getData(this.sucursalSelect);
  }

  ionViewWillEnter() {
    this.loadingInterval = setInterval(() => {
      this.loadingInit();
    }, 300000);
  }

  ionViewDidEnter() {
    this.imageInterval = setInterval(() => {
      this.auxIma_1    = this.beforeIma_1;
      document.getElementById('dolar_real_ima').firstElementChild.setAttribute('src', this.beforeIma_1);
      this.beforeIma_1 = this.afterIma_1;
      this.afterIma_1  = this.auxIma_1;
  
      this.auxIma_2    = this.beforeIma_2;
      document.getElementById('dolar_euro_ima').firstElementChild.setAttribute('src', this.beforeIma_2);
      this.beforeIma_2 = this.afterIma_2;
      this.afterIma_2  = this.auxIma_2;
  
      this.auxIma_3    = this.beforeIma_3;
      document.getElementById('dolar_peso_ima').firstElementChild.setAttribute('src', this.beforeIma_3);
      this.beforeIma_3 = this.afterIma_3;
      this.afterIma_3  = this.auxIma_3;
  
      this.auxIma_4    = this.beforeIma_4;
      document.getElementById('dolar_real_cheque_ima').firstElementChild.setAttribute('src', this.beforeIma_4);
      this.beforeIma_4 = this.afterIma_4;
      this.afterIma_4  = this.auxIma_4;
    }, 1000);
  }

  ionViewCanLeave() {
  }
  
  ionViewWillLeave() {
    clearInterval(this.imageInterval);
    clearInterval(this.loadingInterval);
  }

  ionViewDidLeave() {
  }

  ionViewWillUnload() {
  }

  calculadoraPresent(){
    this.navCtrl.push(CalculadoraPage);
  }

  animationExchange(monedaView, monedaClass) {
    let auxClass    = '';
    let beforeClass = 'cotizacion-normal';
    let afterClass  = monedaClass;

    let exchangeInternal = setInterval(function(){
      auxClass    = beforeClass;
      document.getElementById(monedaView).setAttribute('class', beforeClass);
      beforeClass = afterClass;
      afterClass  = auxClass;
    }, 500);

    setTimeout(function(){
      clearInterval(exchangeInternal);
    }, 30000);
  }

  loadingInit() {
    this.loadingSpinner = this.loadingCtrl.create({
      content: 'Actualizando cotización...',
      duration: 3000, 
      dismissOnPageChange: true
    });

    this.loadingSpinner.present().then(() => {
      this.getData(this.sucursalSelect);
    });

    this.loadingSpinner.onDidDismiss(() => {
    });
  }
  
  presentPopover(idEvent){
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: idEvent
    });

    popover.onDidDismiss(popoverData => {
      this.sucursalSelect = popoverData.id;
      this.getData(this.sucursalSelect);
    });
  }

  getData(idItem){
    this.JSONData = this.apiJSON.getTablero();
    switch(idItem) {
      case 'ASU': {
        this.title      = 'Casa Matriz';
        this.JSONApi    = this.JSONData.asuncion;
        this.updateLast = this.JSONData.asuncion[9].compra + ' ' + this.JSONData.asuncion[9].venta;
        break;
      }

      case 'VM': {
        this.title      = 'Suc. Villa Morra';
        this.JSONApi    = this.JSONData.villamorra;
        this.updateLast = this.JSONData.villamorra[9].compra + ' ' + this.JSONData.villamorra[9].venta;
        break;
      }
      
      case 'CDE': {
        this.title      = 'Suc. Ciudad del Este';
        this.JSONApi    = this.JSONData.ciudaddeleste;
        this.updateLast = this.JSONData.ciudaddeleste[9].compra + ' ' + this.JSONData.ciudaddeleste[9].venta;
        break;
      }
      
      case 'SDG': {
        this.title      = 'Suc. Salto del Guairá';
        this.JSONApi    = this.JSONData.saltodelguaira;
        this.updateLast = this.JSONData.saltodelguaira[9].compra + ' ' + this.JSONData.saltodelguaira[9].venta;
        break;
      }

      case 'SLO': {
        this.title      = 'Age. San Lorenzo';
        this.JSONApi    = this.JSONData.sanlorenzo;
        this.updateLast = this.JSONData.sanlorenzo[9].compra + ' ' + this.JSONData.sanlorenzo[9].venta;
        break;
      }
      
      case 'KM4': {
        this.title      = 'Age. Km4';
        this.JSONApi    = this.JSONData.km4;
        this.updateLast = this.JSONData.km4[9].compra + ' ' + this.JSONData.km4[9].venta;
        break;
      }
      
      case 'ENC': {
        this.title      = 'Suc. Encarnación';
        this.JSONApi    = this.JSONData.encarnacion;
        this.updateLast = this.JSONData.encarnacion[9].compra + ' ' + this.JSONData.encarnacion[9].venta;
        break;
      }
      
      default: {
        this.title      = 'Casa Matriz';
        this.JSONApi    = this.JSONData.asuncion;
        this.updateLast = '00/00/0000 00:00:00';
        break;
      }
    }
  }
}
