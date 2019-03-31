import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Component que mostra l'accés als a la geolocaliztació
 * ionic cordova plugin add cordova-plugin-geolocation
 * npm install --save @ionic-native/geolocation
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */

@Component({
  selector: 'Geopage',
  templateUrl: 'geolocalitzacio.html',
})
export class GeoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.obtenirLatLong();
  }

  obtenirLatLong(){
    this.geolocation.getCurrentPosition().then((res) => {
      let geolocalitzacio='lat '+res.coords.latitude+' lang '+res.coords.longitude;
      let toast = this.toastCtrl.create({
        message: geolocalitzacio,
        duration: 3000
      });
      toast.present();

    }).catch((error) => {
      console.log('Error obtetint localització', error);
    });
  }
}
