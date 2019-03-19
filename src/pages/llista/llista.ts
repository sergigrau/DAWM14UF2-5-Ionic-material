import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DetallsPage } from '../detalls/detalls';

/**
 * Component que mostra una llista d'items, i en seleccionar un mostra el detall
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */

@Component({
  selector: 'llista',
  templateUrl: 'llista.html'
})
export class LlistaPage {
  icons: string[];
  items: Array<{titol: string, text: string, icona: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        titol: 'Item ' + i,
        text: 'Aquest és el item #' + i,
        icona: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemPolsat(event, item) {
    this.navCtrl.push(DetallsPage, {
      item: item
    });
  }
}
