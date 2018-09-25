import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the GiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-giro',
  templateUrl: 'giro.html',
})

export class GiroPage {
  isAndroid: boolean = false;
  JSONApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public apiJSON: ApiProvider) {
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
  }

  ionViewDidLoad() {
    this.apiJSON.getGiro().then(data => {
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
