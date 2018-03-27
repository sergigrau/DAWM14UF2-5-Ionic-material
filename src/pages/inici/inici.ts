import { Component } from '@angular/core';

@Component({
  selector: 'inici',
  templateUrl: 'inici.html'
})
export class IonicPage {

  slides = [
    {
      titol: "DAW2 . M14UF2 . Ionic!",
      descripcio: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      imatge: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      titol: "What is Ionic?",
      descripcio: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      imatge: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      titol: "What is Ionic Cloud?",
      descripcio: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      imatge: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];
  constructor() {

  }
}
