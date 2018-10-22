import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrmjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trmj',
  templateUrl: 'trmj.html',
})
export class TrmjPage {
  song: number;
  songs=[
    "Wanna Be Startin' Somethin",
    "Baby Be Mine",
    "The Girl is Mine",
    "Thriller",
    "Beat It",
    "Billie Jean",
    "Human Nature",
    "P.Y.T. (Pretty Young Thing)",
    "The Lady in My Life"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrmjPage');
  }

}
