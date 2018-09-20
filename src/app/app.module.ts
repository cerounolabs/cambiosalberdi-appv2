import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { TableroPage } from '../pages/tablero/tablero';
import { GiroPage } from '../pages/giro/giro';
import { ServicioPage } from '../pages/servicio/servicio';
import { SucursalPage } from '../pages/sucursal/sucursal';
import { AcercaPage } from '../pages/acerca/acerca';
import { CalculadoraPage } from '../pages/calculadora/calculadora';
import { TabsPage } from '../pages/tabs/tabs';

import { ApiProvider } from '../providers/api/api';
import { PopoverComponent } from '../components/popover/popover';

@NgModule({
  declarations: [
    MyApp,
    TableroPage,
    GiroPage,
    ServicioPage,
    SucursalPage,
    AcercaPage,
    CalculadoraPage,
    TabsPage,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TableroPage,
    GiroPage,
    ServicioPage,
    SucursalPage,
    AcercaPage,
    CalculadoraPage,
    TabsPage,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    Network
  ]
})

export class AppModule {}
