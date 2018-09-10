import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { CalculadoraPage } from '../calculadora/calculadora';
import { ApiProvider } from '../../providers/api/api';
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
  @ViewChild('asuncion_dolar_ima', {read: ElementRef}) ASUDolar_ima : ElementRef;
  @ViewChild('asuncion_dolar_com', {read: ElementRef}) ASUDolar_com : ElementRef;
  @ViewChild('asuncion_dolar_ven', {read: ElementRef}) ASUDolar_ven : ElementRef;
  @ViewChild('asuncion_real_ima', {read: ElementRef}) ASUReal_ima : ElementRef;
  @ViewChild('asuncion_real_com', {read: ElementRef}) ASUReal_com : ElementRef;
  @ViewChild('asuncion_real_ven', {read: ElementRef}) ASUReal_ven : ElementRef;
  @ViewChild('asuncion_euro_ima', {read: ElementRef}) ASUEuro_ima : ElementRef;
  @ViewChild('asuncion_euro_com', {read: ElementRef}) ASUEuro_com : ElementRef;
  @ViewChild('asuncion_euro_ven', {read: ElementRef}) ASUEuro_ven : ElementRef;
  @ViewChild('asuncion_peso_ima', {read: ElementRef}) ASUPeso_ima : ElementRef;
  @ViewChild('asuncion_peso_com', {read: ElementRef}) ASUPeso_com : ElementRef;
  @ViewChild('asuncion_peso_ven', {read: ElementRef}) ASUPeso_ven : ElementRef;
  @ViewChild('asuncion_dolar_real_ima', {read: ElementRef}) ASUDoRe_ima : ElementRef;
  @ViewChild('asuncion_dolar_real_com', {read: ElementRef}) ASUDoRe_com : ElementRef;
  @ViewChild('asuncion_dolar_real_ven', {read: ElementRef}) ASUDoRe_ven : ElementRef;
  @ViewChild('asuncion_dolar_euro_ima', {read: ElementRef}) ASUDoEu_ima : ElementRef;
  @ViewChild('asuncion_dolar_euro_com', {read: ElementRef}) ASUDoEu_com : ElementRef;
  @ViewChild('asuncion_dolar_euro_ven', {read: ElementRef}) ASUDoEu_ven : ElementRef;
  @ViewChild('asuncion_dolar_peso_ima', {read: ElementRef}) ASUDoPe_ima : ElementRef;
  @ViewChild('asuncion_dolar_peso_com', {read: ElementRef}) ASUDoPe_com : ElementRef;
  @ViewChild('asuncion_dolar_peso_ven', {read: ElementRef}) ASUDoPe_ven : ElementRef;
  @ViewChild('asuncion_dolar_cheque_ima', {read: ElementRef}) ASUDoCh_ima : ElementRef;
  @ViewChild('asuncion_dolar_cheque_com', {read: ElementRef}) ASUDoCh_com : ElementRef;
  @ViewChild('asuncion_dolar_cheque_ven', {read: ElementRef}) ASUDoCh_ven : ElementRef;

  isAndroid: boolean = false;
  sucursalSegment: string = "ASU";
  title: string = "Asunción";
  ASUJson;
  VMJson;
  CDEJson;

  JSONApi = {
    "asuncion" : [
      {"id"     : "asuncion_dolar",
       "moneda" : "D\u00f3lar",
       "img"    : "dolar.png",
       "compra" : "5.740",
       "venta"  : "5.765"
      },
      {"id"     : "asuncion_real",
       "moneda" : "Real",
       "img"    : "real.png",
       "compra" : "1.365",
       "venta"  : "1.395"
      },
      {"id"     : "asuncion_euro",
       "moneda" : "Euro",
       "img"    : "euro.png",
       "compra" : "6.570",
       "venta"  : "6.940"
      },
      {"id"     : "asuncion_peso",
       "moneda" : "Peso",
       "img"    : "peso.png",
       "compra" : "179",
       "venta"  : "188"
      },
      {"id"     : "asuncion_dolar_real",
       "moneda" : "D\u00f3lar x Real",
       "img"    : "dolar.png",
       "compra" : "4,130",
       "venta"  : "4,195"
      },
      {"id"     : "asuncion_dolar_euro",
       "moneda" : "D\u00f3lar x Euro",
       "img"    : "dolar.png",
       "compra" : "1,145",
       "venta"  : "1,203"
      },
      {"id"     : "asuncion_dolar_peso",
       "moneda" : "D\u00f3lar x Peso",
       "img"    : "dolar.png",
       "compra" : "30,800",
       "venta"  : "32,000"
      },
      {"id"     : "asuncion_dolar_cheque",
       "moneda" : "D\u00f3lar Cheque",
       "img"    : "dolar.png",
       "compra" : "0",
       "venta"  : "0"
      },
      {"id"     : "asuncion_dolar_real_cheque",
       "moneda" : "D\u00f3lar Cheque x Real",
       "img"    : "dolar.png",
       "compra" : "4,240",
       "venta"  : "4,300"
      },
      {"id"     : "asuncion_timer",
       "moneda" : "\u00daltima Actualizaci\u00f3n",
       "img"    : "timer.png",
       "compra" : "23-08-2018",
       "venta"  : "11:05:03"
      }
    ],
    "villamorra" : [
      {"id"     : "villamorra_dolar",
       "moneda" : "D\u00f3lar",
       "img"    : "dolar.png",
       "compra" : "5.740",
       "venta"  : "5.765"
      },
      {"id"     : "villamorra_real",
       "moneda" : "Real",
       "img"    : "real.png",
       "compra" : "1.365",
       "venta"  : "1.395"
      },
      {"id"     : "villamorra_euro",
       "moneda" : "Euro",
       "img"    : "euro.png",
       "compra" : "6.570",
       "venta"  : "6.940"
      },
      {"id"     : "villamorra_peso",
       "moneda" : "Peso",
       "img"    : "peso.png",
       "compra" : "179",
       "venta"  : "188"
      },
      {"id"     : "villamorra_dolar_real",
       "moneda" : "D\u00f3lar x Real",
       "img"    : "dolar.png",
       "compra" : "4,130",
       "venta"  : "4,195"
      },
      {"id"     : "villamorra_dolar_euro",
       "moneda" : "D\u00f3lar x Euro",
       "img"    : "dolar.png",
       "compra" : "1,145",
       "venta"  : "1,203"
      },
      {"id"     : "villamorra_dolar_peso",
       "moneda" : "D\u00f3lar x Peso",
       "img"    : "dolar.png",
       "compra" : "30,800",
       "venta"  : "32,000"
      },
      {"id"     : "villamorra_dolar_cheque",
       "moneda" : "D\u00f3lar Cheque",
       "img"    : "dolar.png",
       "compra" : "0",
       "venta"  : "5.850"
      },
      {"id"     : "villamorra_dolar_real_cheque",
       "moneda" : "D\u00f3lar Cheque x Real",
       "img"    : "dolar.png",
       "compra" : "4,240",
       "venta"  : "4,300"
      },
      {"id"     : "villamorra_timer",
       "moneda" : "\u00daltima Actualizaci\u00f3n",
       "img"    : "timer.png",
       "compra" : "23-08-2018",
       "venta"  : "11:05:03"
      }
    ],
    "ciudaddeleste" : [
      {"id"     : "ciudadeste_dolar",
       "moneda" : "D\u00f3lar",
       "img"    : "dolar.png",
       "compra" : "5.740",
       "venta"  : "5.765"
      },
      {"id"     : "ciudadeste_real",
       "moneda" : "Real",
       "img"    : "real.png",
       "compra" : "1.365",
       "venta"  : "1.395"
      },
      {"id"     : "ciudadeste_euro",
       "moneda" : "Euro",
       "img"    : "euro.png",
       "compra" : "6.570",
       "venta"  : "6.940"
      },
      {"id"     : "ciudadeste_peso",
       "moneda" : "Peso",
       "img"    : "peso.png",
       "compra" : "179",
       "venta"  : "188"
      },
      {"id"     : "ciudadeste_dolar_real",
       "moneda" : "D\u00f3lar x Real",
       "img"    : "dolar.png",
       "compra" : "4,130",
       "venta"  : "4,195"
      },
      {"id"     : "ciudadeste_dolar_euro",
       "moneda" : "D\u00f3lar x Euro",
       "img"    : "dolar.png",
       "compra" : "1,145",
       "venta"  : "1,203"
      },
      {"id"     : "ciudadeste_dolar_peso",
       "moneda" : "D\u00f3lar x Peso",
       "img"    : "dolar.png",
       "compra" : "30,800",
       "venta"  : "32,000"
      },
      {"id"     : "ciudadeste_dolar_cheque",
       "moneda" : "D\u00f3lar Cheque",
       "img"    : "dolar.png",
       "compra" : "5.810",
       "venta"  : "5.850"
      },
      {"id"     : "ciudadesta_dolar_real_cheque",
       "moneda" : "D\u00f3lar Cheque x Real",
       "img"    : "dolar.png",
       "compra" : "4,240",
       "venta"  : "4,300"
      },
      {"id"     : "ciudadeste_timer",
       "moneda" : "\u00daltima Actualizaci\u00f3n",
       "img"    : "timer.png",
       "compra" : "23-08-2018",
       "venta"  : "11:05:03"
      }
    ]
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public apiJSON: ApiProvider, private renderer: Renderer2 ) {
    console.log('constructor TableroPage');

    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter TableroPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableroPage');

    this.ASUJson  = this.JSONApi.asuncion;
    this.VMJson   = this.JSONApi.asuncion;
    this.CDEJson  = this.JSONApi.asuncion;
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter TableroPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter TableroPage');

    this.animationImage('asuncion');
    this.animationExchange('asuncion', '_dolar_com', 'cotizacion-sube');

  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave TableroPage');
  }
  
  ionViewWillLeave() {
    console.log('ionViewWillLeave TableroPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave TableroPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload TableroPage');
  }

  calculadoraPresent(){
    this.navCtrl.push(CalculadoraPage);
  }

  animationImage(ciudadView) {
    let auxIma_1    = '';
    let beforeIma_1 = 'assets/flag/dolar.png';
    let afterIma_1  = 'assets/flag/real.png';

    let auxIma_2    = '';
    let beforeIma_2 = 'assets/flag/dolar.png';
    let afterIma_2  = 'assets/flag/euro.png';

    let auxIma_3    = '';
    let beforeIma_3 = 'assets/flag/dolar.png';
    let afterIma_3  = 'assets/flag/peso.png';

    let auxIma_4    = '';
    let beforeIma_4 = 'assets/flag/dolar.png';
    let afterIma_4  = 'assets/flag/real.png';

    setInterval(function(){
      auxIma_1    = beforeIma_1;
      document.getElementById(ciudadView + '_dolar_real_ima').firstElementChild.setAttribute('src', beforeIma_1);
      beforeIma_1 = afterIma_1;
      afterIma_1  = auxIma_1;

      auxIma_2    = beforeIma_2;
      document.getElementById(ciudadView + '_dolar_euro_ima').firstElementChild.setAttribute('src', beforeIma_2);
      beforeIma_2 = afterIma_2;
      afterIma_2  = auxIma_2;

      auxIma_3    = beforeIma_3;
      document.getElementById(ciudadView + '_dolar_peso_ima').firstElementChild.setAttribute('src', beforeIma_3);
      beforeIma_3 = afterIma_3;
      afterIma_3  = auxIma_3;

      auxIma_4    = beforeIma_4;
      document.getElementById(ciudadView + '_dolar_real_cheque_ima').firstElementChild.setAttribute('src', beforeIma_4);
      beforeIma_4 = afterIma_4;
      afterIma_4  = auxIma_4;
    }, 1500);
  }

  animationExchange(ciudadView, monedaView, classView) {
    let auxClass    = '';
    let beforeClass = 'cotizacion-normal';
    let afterClass  = classView;

    let internalEchange = setInterval(function(){
      auxClass    = beforeClass;
      document.getElementById(ciudadView + monedaView).setAttribute('class', beforeClass);
      beforeClass = afterClass;
      afterClass  = auxClass;
    }, 500);

    setTimeout(function(){
      clearInterval(internalEchange);
    }, 30000);
  }
}
