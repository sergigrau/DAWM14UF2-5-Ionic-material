import { Component } from '@angular/core';

/**
 * Component inicial de l'aplicació
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */
@Component({
  selector: 'inici',
  templateUrl: 'inici.html'
})
export class IonicPage {

  slides = [
    {
      titol: "DAW2 . M14UF2 . Ionic!",
      descripcio: "<b>Ionic</b> és un bastiment per a construir aplicacions híbrides modernes.",
      imatge: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      titol: "Què és Ionic?",
      descripcio: "<b>Ionic</b> és open source i es basa en HTML5, CSS, i TS.",
      imatge: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      titol: "Què és Ionic Cloud?",
      descripcio: "<b>Ionic Cloud</b> es una plataforma al núvol per a gestionar les aplicacions.",
      imatge: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];
  constructor() {

  }
}
