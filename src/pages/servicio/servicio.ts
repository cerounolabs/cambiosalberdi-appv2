import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-servicio',
  templateUrl: 'servicio.html',
})

export class ServicioPage {
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    console.log('constructor ServicioPage');
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter ServicioPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicioPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ServicioPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ServicioPage');
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave ServicioPage');
  }
  
  ionViewWillLeave() {
    console.log('ionViewWillLeave ServicioPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave ServicioPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload ServicioPage');
  }
}
