import { Component } from '@angular/core';
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
  isAndroid: boolean = false;
  sucursalSegment: string = "ASU";
  title: string = "Asunción";
  apiSUCURSAL;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public api: ApiProvider) {
    console.log('constructor TableroPage');
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter TableroPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableroPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter TableroPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter TableroPage');

    /*let temp = this;
    setInterval(function(){
      temp.api.getCotizacion()
      .subscribe(
        (data) => {console.log("data: " + data);},
        (error) => {console.log("error: " + error);}
      )
    }, 10000);*/
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
}
