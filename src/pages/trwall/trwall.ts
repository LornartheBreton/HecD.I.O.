import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrwallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trwall',
  templateUrl: 'trwall.html',
})
export class TrwallPage {
  song: number;
  songs=[
    "In the Flesh?",
    "The Thin Ice",
    "Another Brick in the Wall (Part 1)",
    "The Happiest Days of Our Lives",
    "Another Brick in the Wall",
    "Mother",
    "Goodbye BLue Sky",
    "Empty Spaces",
    "Young Lust",
    "One of My Turns",
    "Don't Leave Me Now",
    "Another Brick in the Wall (Part 3)",
    "Goodbye Cruel World",
    "Hey You",
    "Is There Anybody Out There?",
    "Nobody Home",
    "Vera",
    "Bring the Boys Back Home",
    "Comfortably Numb",
    "The Show Must Go On",
    "In the Flesh",
    "Run Like Hell",
    "Waiting for the Worms",
    "Stop",
    "The Trial",
    "Outside the Wall"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrwallPage');
  }

}
