import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { IonicPage } from '../pages/inici/inici';
import { LlistaPage } from '../pages/llista/llista';
import { CalendariPage } from '../pages/calendari/calendari';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.pagines = [
      { titol: 'Ionic', component: IonicPage },
      { titol: 'Llista / Detall', component: LlistaPage },
      { titol: 'Calendari', component: CalendariPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  obrirPagina(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
