import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


/**
 * Generated class for the AcercaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
})

export class AcercaPage {
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    console.log('constructor AcercaPage');
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter AcercaPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercaPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter AcercaPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AcercaPage');
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave AcercaPage');
  }
  
  ionViewWillLeave() {
    console.log('ionViewWillLeave AcercaPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave AcercaPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload AcercaPage');
  }
}
