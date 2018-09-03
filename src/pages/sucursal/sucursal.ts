import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


/**
 * Generated class for the SucursalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-sucursal',
  templateUrl: 'sucursal.html',
})

export class SucursalPage {
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    console.log('constructor SucursalPage');
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter SucursalPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SucursalPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SucursalPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter SucursalPage');
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave SucursalPage');
  }
  
  ionViewWillLeave() {
    console.log('ionViewWillLeave SucursalPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave SucursalPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload SucursalPage');
  }
}
