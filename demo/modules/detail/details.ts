import {Component} from '@angular/core';
import {NavController, NavParams,ViewController} from 'ionic-angular';
import {ImagePicker,ImagePickerOptions} from 'ionic-native';

@Component({
  templateUrl: './build/demo/modules/detail/details.html',
})
export class MyDetail {

  constructor(
    public viewCtrl: ViewController
  ) {

  }

  doImagePicker(){
    var options:ImagePickerOptions = {

    }
    ImagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => {
      console.log(err);
    });
  }

  ionViewWillEnter(){
    console.log('Do we have a Navbar?', this.viewCtrl.hasNavbar() + ' index' + this.viewCtrl.index);
  }
}

