import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


/**
 * Generated class for the CalculadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})

export class CalculadoraPage {
  isAndroid: boolean = false;
  sucursal: string = "ASU";
  title: string = "Asunción";

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    console.log('constructor CalculadoraPage');
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter CalculadoraPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CalculadoraPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CalculadoraPage');
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave CalculadoraPage');
  }
  
  ionViewWillLeave() {
    console.log('ionViewWillLeave CalculadoraPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave CalculadoraPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload CalculadoraPage');
  }
}
