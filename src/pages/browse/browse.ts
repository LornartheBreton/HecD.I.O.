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
  p=0;
  vendedores=[
    {
      nombre: "Microsoft",
      valoracion: 3
    },
    {
      nombre: "Sony",
      valoracion: 4
    },
    {
      nombre: "Nintendo",
      valoracion: 5
    },
    {
      nombre: "Liverpool",
      valoracion: 4
    }
  ];
  productos=[
    /*{
      id: 0,
      nombre: "Test",
      foto: "../assets/imgs/test.jpg",
      precio: 100.00,
      nombreVendedor: "Microsoft",
      valVendedor: 3,
      reviews: [
        {
          user: "Jovenazo",
          avatar: "",
          fecha: "9-10-18",
          review: "Me gustó mucho"
        }
      ],
      fecha: 5-12-2018,
      disponibles: Math.floor(Math.random() * 11)+1
    },*/
    {
      id: 1,
      nombre: "Joycon Controllers",
      foto: "../assets/imgs/joycon.jpg",
      precio: 1000.00,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "Jovenazo",
          avatar: "",
          fecha: "9-10-18",
          review: "Me gustó mucho"
        }
      ],
      fecha: 5 - 12 - 2018,
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  nombre:"";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre=this.navParams.get("nombre");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

}
