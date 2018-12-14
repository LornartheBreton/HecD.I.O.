import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { CartPage } from '../cart/cart';
import { Storage } from '@ionic/storage';
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
  product=ProductPage;
  /*vendedores=[
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
  ];*/
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
      id: 0,
      nombre: "Joycon Controllers",
      foto: "../assets/imgs/joycon.jpg",
      precio: 1000.00,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "Jovenazo",
          avatar: "../assets/imgs/a1.jpg",
          fecha: "9-10-18",
          review: "Me gustó mucho"
        }
      ],
      fecha:  "3 - 3 - 2017",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 1,
      nombre: "Gamecube Adapter",
      foto: "../assets/imgs/ADGC.jpg",
      precio: 600.00,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "ElVatoh69",
          avatar: "../assets/imgs/a2.jpg",
          fecha: "06-12-18",
          review: "Estaba muy duro"
        }
      ],
      fecha: "6 - 12 - 2018",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 2,
      nombre: "Switch Car Charger",
      foto: "../assets/imgs/cc.jpg",
      precio: 350.00,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "ElFerrocarril420",
          avatar: "../assets/imgs/a3.jpg",
          fecha: "10-11-2018",
          review: "Así si pude viajar carnal"
        }
      ],
      fecha: "3 - 3 - 2017",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 3,
      nombre: "Gamecube Controller",
      foto: "../assets/imgs/cgc.jpg",
      precio: 600.00,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "Milislife",
          avatar: "../assets/imgs/a4.jpg",
          fecha: "08-12-18",
          review: "eL uNicO JueGo dE SmAsH ke eCzZizzzTE Es MiLiiiiii"
        }
      ],
      fecha: "04 - 12 - 2018",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 4,
      nombre: "GeForce GTX 1050 Ti",
      foto: "../assets/imgs/gc.jpg",
      precio: 3000,
      nombreVendedor: "NVIDIA",
      valVendedor: 4,
      reviews: [
        {
          user: "PiciMazterReiz",
          avatar: "../assets/imgs/a1.jpg",
          fecha: "12-12-2015",
          review: "No corre Buzzkaminazzz en 5k"
        }
      ],
      fecha: "6 - 12 - 2015",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 5,
      nombre: "Razer Headphones",
      foto: "../assets/imgs/hs.jpg",
      precio: 1500,
      nombreVendedor: "Razer",
      valVendedor: 3,
      reviews: [
        {
          user: "PiciMazterReiz",
          avatar: "../assets/imgs/a3.jpg",
          fecha: "12-03-2016",
          review: "Tiene luzezitazzz"
        }
      ],
      fecha: "6 - 12 - 2016",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 6,
      nombre: "Mario Kart 8 Deluxe",
      foto: "../assets/imgs/mk.jpg",
      precio: 1000,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "Casual",
          avatar: "../assets/imgs/a2.jpg",
          fecha: "03-03-2017",
          review: "Siempre pierdo =("
        }
      ],
      fecha: "03-03-2017",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 7,
      nombre: "Monitor V. R. G. S",
      foto: "../assets/imgs/MONITOR.jpg",
      precio: 10000,
      nombreVendedor: "Samsung",
      valVendedor: 3,
      reviews: [
        {
          user: "Usuario",
          avatar: "../assets/imgs/a4.jpg",
          fecha: "16-09-2017",
          review: "Me gustan con curvas"
        }
      ],
      fecha: "15-01-2017",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 8,
      nombre: "Nintendo Switch",
      foto: "../assets/imgs/ns.jpg",
      precio: 7000,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "Vatoh69",
          avatar: "../assets/imgs/a1.jpg",
          fecha: "06-03-2017",
          review: "Zawarudo"
        }
      ],
      fecha: "06-03-2017",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 9,
      nombre: "Nintendo Switch - Smash Edition",
      foto: "../assets/imgs/nsse.jpg",
      precio: 7000,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "Vatoh69",
          avatar: "../assets/imgs/a1.jpg",
          fecha: "07-03-2017",
          review: "DIO"
        }
      ],
      fecha: "07-03-2017",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {
      id: 10,
      nombre: "Nintendo PRO CONTROLLER",
      foto: "../assets/imgs/proc.jpg",
      precio: 1000,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "ElDonas",
          avatar: "../assets/imgs/a1.jpg",
          fecha: "06-03-2017",
          review: "Jotaro?"
        }
      ],
      fecha: "06-03-2017",
      disponibles: Math.floor(Math.random() * 100) + 1
    },
    {id: 11,
      nombre: "PS4 Controller",
      foto: "../assets/imgs/ps4c.jpg",
      precio: 7000,
      nombreVendedor: "Sony",
      valVendedor: 5,
      reviews: [
        {
          user: "El Favo",
          avatar: "../assets/imgs/a3.jpg",
          fecha: "12-05-2017",
          review: "Impresionanti"
        }
      ],
      fecha: "06-04-2017",
      disponibles: Math.floor(Math.random() * 100) + 1},
    {id: 12,
      nombre: "PS4 Spiderman Edition",
      foto: "../assets/imgs/ps4s.jpg",
      precio: 7000,
      nombreVendedor: "Sony",
      valVendedor: 5,
      reviews: [
        {
          user: "ClauDio",
          avatar: "../assets/imgs/a3.jpg",
          fecha: "12-05-2018",
          review: "Es Bellisimo"
        }
      ],
      fecha: "06-03-2017",
      disponibles: Math.floor(Math.random() * 100) + 1},
    {id: 13,
      nombre: "Gaming Mouse Razer",
      foto: "../assets/imgs/razerm.jpg",
      precio: 1500,
      nombreVendedor: "Razer",
      valVendedor: 5,
      reviews: [
        {
          user: "PCMasterReiz",
          avatar: "../assets/imgs/a3.jpg",
          fecha: "12-05-2018",
          review: "Excelenti mouse para jugar"
        }
      ],
      fecha: "20-03-2018",
      disponibles: Math.floor(Math.random() * 100) + 1},
    {id: 14,
      nombre: "Gaming keyboard Razer",
      foto: "../assets/imgs/razert.jpg",
      precio: 1500,
      nombreVendedor: "Razer",
      valVendedor: 5,
      reviews: [
        {
          user: "PCMasterReiz",
          avatar: "../assets/imgs/a2.jpg",
          fecha: "12-05-2018",
          review: "Excelenti mouse para jugar"
        }
      ],
      fecha: "06-03-2017",
      disponibles: Math.floor(Math.random() * 100) + 1},
    {id: 15,
      nombre: "Red Dead Redemption 2 ps4",
      foto: "../assets/imgs/rdr2.jpg",
      precio: 1200,
      nombreVendedor: "Rockstar",
      valVendedor: 4,
      reviews: [
        {
          user: "DizN",
          avatar: "../assets/imgs/a4.jpg",
          fecha: "12-05-2018",
          review: "Excelente juego"
        }
      ],
      fecha: "25-11-2018",
      disponibles: Math.floor(Math.random() * 100) + 1},
    {id: 16,
      nombre: "Marvel's Spiderman",
      foto: "../assets/imgs/sm.jpg",
      precio: 1200,
      nombreVendedor: "Insomniac",
      valVendedor: 5,
      reviews: [
        {
          user: "ClauDio",
          avatar: "../assets/imgs/a4.jpg",
          fecha: "12-05-2018",
          review: "No he podido dejar de jugar desde hace 36 horas"
        }
      ],
      fecha: "21-10-2018",
      disponibles: Math.floor(Math.random() * 100) + 1},
    {id: 17,
      nombre: "Super Smash Bros Ultimate",
      foto: "../assets/imgs/ssb.jpg",
      precio: 1499,
      nombreVendedor: "Nintendo",
      valVendedor: 5,
      reviews: [
        {
          user: "HecTornado",
          avatar: "../assets/imgs/a2.jpg",
          fecha: "12-07-2018",
          review: "El mejor juego de smash hasta ahora"
        }
      ],
      fecha: "07-12-2018",
      disponibles: Math.floor(Math.random() * 100) + 1},
    {id: 18,
      nombre: "X-box One",
      foto: "../assets/imgs/xb1.jpg",
      precio: 1500,
      nombreVendedor: "Microsoft",
      valVendedor: 4,
      reviews: [
        {
          user: "Leo",
          avatar: "../assets/imgs/a3.jpg",
          fecha: "12-05-2018",
          review: "Esperaba menos, está excelente"
        }
      ],
      fecha: "06-03-2017",
      disponibles: Math.floor(Math.random() * 100) + 1},
    {id: 19,
      nombre: "X-box One Controller",
      foto: "../assets/imgs/xc.jpg",
      precio: 850,
      nombreVendedor: "Microsoft",
      valVendedor: 4,
      reviews: [
        {
          user: "Leo",
          avatar: "../assets/imgs/a2.jpg",
          fecha: "12-05-2018",
          review: "Muy buen control, rompí mi control pasado :v"
        }
      ],
      fecha: "06-03-2017",
      disponibles: Math.floor(Math.random() * 100) + 1},
  ];
  //nombre:"";
  usuarios=[];
  userIndex:number;
  cart=CartPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage) {
    this.usuarios=this.navParams.get("db");
    this.userIndex=this.navParams.get("user");
    this.storage.keys()
      .then(keys => {
        if (keys.some(k => k == 'usuarios')) {
          this.storage.get('usuarios')
            .then(usuarios => {
              this.usuarios = JSON.parse(usuarios);
              console.log("Yes");
            });
        }
      });
  }
  viewProduct(n:any){
    this.navCtrl.push(this.product,{product:n, db: this.usuarios, user: this.userIndex})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }
  viewCart(){
    this.navCtrl.push(this.cart,{cart: this.usuarios[this.userIndex].carrito});
  }

}
