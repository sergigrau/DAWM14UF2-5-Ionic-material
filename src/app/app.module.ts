import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {IonicPage} from '../pagines/inici/inici';
import {DetallsPage} from '../pagines/detalls/detalls';
import {LlistaPage} from '../pagines/llista/llista';
import {BaseDadesPage} from "../pagines/baseDades/baseDades";
import {CameraPage} from "../pagines/camera/camera";
import {GeoPage} from "../pagines/geolocalitzacio/geolocalitzacio";
import {ContactPage} from "../pagines/contactes/contactes";
import {SearchPage} from "../pagines/trucada/trucada";

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
