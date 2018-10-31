import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CaratulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-caratula',
  templateUrl: 'caratula.html',
})
export class CaratulaPage {
  imagen: string;
  album: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imagen=this.navParams.get('imagen');
    this.album=this.navParams.get('album');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaratulaPage');
  }

}
