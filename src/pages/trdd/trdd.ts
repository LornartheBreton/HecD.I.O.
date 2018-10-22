import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trdd',
  templateUrl: 'trdd.html',
})
export class TrddPage {
  song: number;
  songs=[
    "Intro",
    "Last Living Souls",
    "Kids with Guns",
    "O Green World",
    "Dirty Harry",
    "Feel Good Inc.",
    "El Mañana",
    "Every Planet We Reach is Dead",
    "November Has Come",
    "All Alone",
    "DARE",
    "Fire Coming Out of the Monkey's Head",
    "Don't Get Lost in Heaven",
    "Demon Days"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrddPage');
  }

}
