import { Component } from '@angular/core';
import { TableroPage } from '../tablero/tablero';
import { GiroPage } from '../giro/giro';
import { ServicioPage } from '../servicio/servicio';
import { SucursalPage } from '../sucursal/sucursal';
import { AcercaPage } from '../acerca/acerca';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tab1Root = TableroPage;
  tab2Root = GiroPage;
  tab3Root = ServicioPage;
  tab4Root = SucursalPage;
  tab5Root = AcercaPage;
  
  constructor() {
  }
}
