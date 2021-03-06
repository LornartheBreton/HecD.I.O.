import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  nombre='';
  correo = '';
  contra = '';
  telefono='';
  carrito=[];
  usuarios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.usuarios = this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  clickRegistro() {
    console.log(this.correo);
    console.log(this.contra);
    this.usuarios.push({
      nombre: this.nombre,
      correo: this.correo,
      contra: this.contra,
      telefono: this.telefono,
      carrito: this.carrito
    });
    // modicar la llave para tener diferentes usuarios
    this.storage.set('usuarios', JSON.stringify(this.usuarios));
    this.navCtrl.pop();
  }

}
