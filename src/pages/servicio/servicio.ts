import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';


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
  JSONApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public apiJSON: ApiProvider) {
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
  }

  ionViewDidLoad() {
    this.JSONApi = this.apiJSON.getServicio();
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
}
