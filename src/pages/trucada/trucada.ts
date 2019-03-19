import {Component} from '@angular/core';
import {CallNumber} from '@ionic-native/call-number';

@Component({
  selector: 'SearchPage',
  templateUrl: 'CallNumber.html',
})
export class SearchPage {
  constructor(private callNumber: CallNumber) { }

  callJoint(telephoneNumber) {
    this.callNumber.callNumber(telephoneNumber, true) //(`911`,true)

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
