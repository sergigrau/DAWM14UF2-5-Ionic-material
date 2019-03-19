import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {IonicPage} from '../pages/inici/inici';
import {DetallsPage} from '../pages/detalls/detalls';
import {LlistaPage} from '../pages/llista/llista';
import {BaseDadesPage} from "../pages/baseDades/baseDades";
import {CameraPage} from "../pages/camera/camera";
import {GeoPage} from "../pages/geolocalitzacio/geolocalitzacio";
import {ContactPage} from "../pages/contactes/contactes";
import {SearchPage} from "../pages/trucada/trucada";

import { BaseDadesService } from '../providers/baseDadesService';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    IonicPage,
    DetallsPage,
    LlistaPage,
    BaseDadesPage,
    CameraPage,
    GeoPage,
    ContactPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IonicPage,
    DetallsPage,
    LlistaPage,
    BaseDadesPage,
    CameraPage,
    GeoPage,
    ContactPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    BaseDadesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
