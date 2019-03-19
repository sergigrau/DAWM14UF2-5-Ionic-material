import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'Geopage',
  templateUrl: 'Geolocation.html',
})
export class GeoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.getLocation();
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((res) => {
      // resp.coords.latitude
      // resp.coords.longitude
      //let location= 'lat'+ res.coords.latitude +'lang'+ res.coords.longitude;
      let location='lat '+res.coords.latitude+' lang '+res.coords.longitude;
      let toast = this.toastCtrl.create({
        message: location,
        duration: 3000
      });
      toast.present();

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
