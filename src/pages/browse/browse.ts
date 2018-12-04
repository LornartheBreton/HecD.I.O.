import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html',
})
export class BrowsePage {
  nombre:"";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre=this.navParams.get("nombre");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

}
