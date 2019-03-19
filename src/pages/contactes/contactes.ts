import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Component que mostra l'accés als contactes

 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

}
