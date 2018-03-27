import {Component} from '@angular/core';
import {Calendar} from '@ionic-native/calendar';

import {NavController, NavParams} from 'ionic-angular';


/*
$ ionic cordova plugin add cordova-plugin-calendar
$ npm install --save @ionic-native/calendar
 */

@Component({
  selector: 'calendari',
  templateUrl: 'calendari.html'
})
export class CalendariPage {
  constructor(private calendar: Calendar) {
    this.calendar.createCalendar('IONIC').then((msg) => {
      console.log(msg);
    },(err) => {
      console.log(err);
    });
  }

}
