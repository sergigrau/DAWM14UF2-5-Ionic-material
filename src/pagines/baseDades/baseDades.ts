import {Component} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BaseDadesService } from '../../providers/baseDadesService';

/**
 * Component que mostra el funcionament de SQLite
 * ionic cordova plugin add cordova-sqlite-storage
 * npm install --save @ionic-native/sqlite
 * @author sergi.grau@fje.edu
 * @version 2.0 25.03.2019
 *
 */

@Component({
  selector: 'baseDades',
  templateUrl: 'baseDades.html'
})
export class BaseDadesPage{


  tasques: any[] = [];
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public baseDadesService: BaseDadesService
  ) {}

  ionViewDidLoad(){
    this.obtenirTotesTasques();
  }

  esborrarTasca(tasca: any, index){
    this.baseDadesService.esborrar(tasca)
      .then(response => {
        console.log( response );
        this.tasques.splice(index, 1);
      })
      .catch( error => {
        console.error( error );
      })
  }

  obtenirTotesTasques(){
    this.baseDadesService.recuperarTots()
      .then(tasques => {
        console.log(tasques);
        this.tasques = tasques;
      })
      .catch( error => {
        console.error( error );
      });
  }

  openAlertNewTask(){
    let alert = this.alertCtrl.create({
      title: 'Crear tasca',
      message: 'Escriu el nom de la tasca',
      inputs: [
        {
          name: 'titol',
          placeholder: 'títol',
        }
      ],
      buttons: [
        {
          text: 'Cancel·lar',
          handler: () =>{
            console.log('Cancel·lar');
          }
        },
        {
          text: 'Crear',
          handler: (data)=>{
            data.completada = false;
            this.baseDadesService.crear(data)
              .then(response => {
                this.tasques.unshift( data );
              })
              .catch( error => {
                console.error( error );
              })
          }
        }
      ]
    });
    alert.present();
  }

  actualitzarTasca(tasca, index){
    tasca = Object.assign({}, tasca);
    tasca.completada = !tasca.completada;
    this.baseDadesService.actualitzar(tasca)
      .then( response => {
        this.tasques[index] = tasca;
      })
      .catch( error => {
        console.error( error );
      })
  }

}
