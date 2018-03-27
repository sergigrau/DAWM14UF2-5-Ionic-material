import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'detalls.html'
})
export class DetallsPage {
  itemSeleccionat: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemSeleccionat = navParams.get('item');
  }
}
