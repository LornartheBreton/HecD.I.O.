import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  s=0;
  nombre: string;
  foto: string;
  vendedorNombre: string;
  vendedorVal: number;
  available: number;
  fecha:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre=this.navParams.get("nombre");
    this.foto=this.navParams.get("foto");
    this.vendedorNombre=this.navParams.get("nombreVendedor");
    this.vendedorVal=this.navParams.get("valVendedor");
    this.available=this.navParams.get("disponibles");
    this.fecha=this.navParams.get("fecha");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
