import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})

export class PopoverComponent {
  items: any;

  constructor(public viewCtrl: ViewController, public navParams:NavParams) {
    this.items = [
      {id: 'ASU', name: 'Casa Matriz'},
      {id: 'VM',  name: 'Villa Morra'},
      {id: 'CDE', name: 'Ciudad del Este'},
      {id: 'SDG', name: 'Salto del Guairá'},
      {id: 'SLO', name: 'San Lorenzo'},
      {id: 'KM4', name: 'CDE KM4'},
      {id: 'ENC', name: 'Encarnación'}
    ];
  }

  itemClick(idItem){
    this.viewCtrl.dismiss(idItem);
  }
}
