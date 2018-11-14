import { Component } from '@angular/core';

import { NavController, NavParams, Platform } from 'ionic-angular';

import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';

import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the AcercaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
})

export class AcercaPage {
  isAndroid: boolean = false;
  urlBrowser: string = 'https://www.cerouno.com.py';
  JSONApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public apiJSON: ApiProvider, public inAppBrowser: InAppBrowser) {
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
  }

  ionViewDidLoad() {
    this.apiJSON.getLogo().then(data => {
      this.JSONApi = data['data'];
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

  openWebPage(){
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    const browser = this.inAppBrowser.create(this.urlBrowser, '_self', options);
  }
}
