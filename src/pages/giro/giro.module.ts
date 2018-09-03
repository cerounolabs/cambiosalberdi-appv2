import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiroPage } from './giro';

@NgModule({
  declarations: [
    GiroPage,
  ],
  imports: [
    IonicPageModule.forChild(GiroPage),
  ],
})
export class GiroPageModule {}
