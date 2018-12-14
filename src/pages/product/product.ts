import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  //s=0;
  userIndex: number;
  usuarios:any[];
  carrito:any[];
  product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage) {
    this.product=this.navParams.get("product");
    this.usuarios=this.navParams.get("db");
    this.userIndex=this.navParams.get("user");
    this.carrito=this.usuarios[this.userIndex].carrito;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  addCart(){
    this.carrito.push(this.product);
    this.usuarios[this.userIndex].carrito=this.carrito;
    this.storage.set('usuarios', JSON.stringify(this.usuarios));
    this.navCtrl.pop();
  }

}
