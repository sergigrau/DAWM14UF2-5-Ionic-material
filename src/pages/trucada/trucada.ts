import {Component} from '@angular/core';
import {CallNumber} from '@ionic-native/call-number';

/**
 * Component que mostra el funcionament de les trucades
 * ionic cordova plugin add call-number
 * npm install --save @ionic-native/call-number
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */


@Component({
  selector: 'SearchPage',
  templateUrl: 'trucada.html',
})
export class SearchPage {
  constructor(private callNumber: CallNumber) { }

  callJoint(telephoneNumber) {
    this.callNumber.callNumber(telephoneNumber, true)

    this.callNumber.isCallSupported()
      .then(function (response) {
        if (response == true) {
          // do something
        }
        else {
          // do something else
        }
      });

  }
}
