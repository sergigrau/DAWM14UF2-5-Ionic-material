import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicPage } from '../pages/inici/inici';
import { DetallsPage } from '../pages/detalls/detalls';
import { LlistaPage } from '../pages/llista/llista';
import {CalendariPage} from "../pages/calendari/calendari";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    IonicPage,
    DetallsPage,
    LlistaPage,
    CalendariPage
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
    CalendariPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
