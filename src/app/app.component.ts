import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { IonicPage } from '../pages/inici/inici';
import { LlistaPage } from '../pages/llista/llista';

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
  pages: Array<{titol: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.pages = [
      { titol: 'Ionic', component: IonicPage },
      { titol: 'Llista / Detall', component: LlistaPage }
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
