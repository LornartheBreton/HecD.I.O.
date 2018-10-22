import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrdbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trdb',
  templateUrl: 'trdb.html',
})
export class TrdbPage {
  song: number;
  songs=[
    "Five Years",
    "Soul Love",
    "Moonage Daydream",
    "Starman",
    "It Ain't Easy",
    "Lasy Stardust",
    "Star",
    "Hang On to Yourself",
    "Ziggy Stardust",
    "Sufragette City",
    "Rock n' Roll Suicide"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrdbPage');
  }

}
