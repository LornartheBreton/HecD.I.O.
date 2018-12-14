import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cart=[];
  total=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cart=this.navParams.get("cart");
    for(let i of this.cart){
      this.total+=i.precio;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
