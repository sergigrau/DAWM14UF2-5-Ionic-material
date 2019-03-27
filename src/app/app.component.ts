import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { IonicPage } from '../pagines/inici/inici';
import { LlistaPage } from '../pagines/llista/llista';
import { BaseDadesPage } from '../pagines/baseDades/baseDades';
import { CameraPage } from '../pagines/camera/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BaseDadesService } from '../providers/baseDadesService';
import { SQLite } from '@ionic-native/sqlite';
import {GeoPage} from "../pagines/geolocalitzacio/geolocalitzacio";


/*
  Aplicació amb Ionic
  author sergi.grau@fje.edu
  version 1.0 28.3.2018

 */

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = IonicPage;
  pagines: Array<{titol: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public baseDadesService: BaseDadesService,
    public sqlite: SQLite
  ) {
    this.initializeApp();

    this.pagines = [
      { titol: 'Ionic', component: IonicPage },
      { titol: 'Llista / Detall', component: LlistaPage },
      { titol: 'BaseDades', component: BaseDadesPage },
      { titol: 'Camera', component: CameraPage},
      { titol: 'Geolocalitzacio', component: GeoPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createDatabase();
    });
  }

  obrirPagina(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
      .then((db) => {
        this.baseDadesService.assignarBD(db);
        return this.baseDadesService.createTable();
      })
      .catch(error =>{
        console.error(error);
      });
  }
}
