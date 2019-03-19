import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

/**
 * Component detall que apareix al seleccionar un item de la llista
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */

@Component({
  selector: 'detalls',
  templateUrl: 'detalls.html'
})
export class DetallsPage {
  itemSeleccionat: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemSeleccionat = navParams.get('item');
  }
}
