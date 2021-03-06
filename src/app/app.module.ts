import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicStorageModule} from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { TableroPage } from '../pages/tablero/tablero';
import { GiroPage } from '../pages/giro/giro';
import { GiroDetallePage } from '../pages/giro-detalle/giro-detalle';
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
    GiroDetallePage,
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
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TableroPage,
    GiroPage,
    GiroDetallePage,
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
    Network,
    InAppBrowser
  ]
})

export class AppModule {}
