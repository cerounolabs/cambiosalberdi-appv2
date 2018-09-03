import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SucursalPage } from './sucursal';

@NgModule({
  declarations: [
    SucursalPage,
  ],
  imports: [
    IonicPageModule.forChild(SucursalPage),
  ],
})
export class SucursalPageModule {}
