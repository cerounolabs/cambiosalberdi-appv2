import { Component } from '@angular/core';

import { NavController, NavParams, Platform } from 'ionic-angular';

import { Subscription} from 'rxjs/Subscription';

import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the SucursalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sucursal',
  templateUrl: 'sucursal.html',
})

export class SucursalPage {
  isAndroid: boolean = false;
  JSONApi : any;
  connected: Subscription;
  disconnected: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public apiJSON: ApiProvider) {
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
  }

  ionViewDidLoad() {
    this.apiJSON.getSucursal().then(data => {
      this.JSONApi = data;
    });
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
