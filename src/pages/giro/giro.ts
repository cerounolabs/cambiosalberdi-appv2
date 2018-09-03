import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    console.log('constructor GiroPage');
    this.isAndroid = platform.is('android');
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter GiroPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiroPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter GiroPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter GiroPage');
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave GiroPage');
  }
  
  ionViewWillLeave() {
    console.log('ionViewWillLeave GiroPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave GiroPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload GiroPage');
  }
}
