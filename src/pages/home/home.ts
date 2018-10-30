import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DdPage } from '../dd/dd';
import { DbPage } from '../db/db';
import { HumanzPage } from '../humanz/humanz';
import { MjPage } from '../mj/mj';
import { WallPage } from '../wall/wall';
import { GorillazPage } from '../gorillaz/gorillaz';
import { BowiePage } from '../bowie/bowie';
import { FloydPage } from '../floyd/floyd';
import { MichaelPage } from '../michael/michael';
import { TrddPage } from '../trdd/trdd';
import { TrdbPage } from '../trdb/trdb';
import { TrwallPage } from '../trwall/trwall';
import { TrmjPage } from '../trmj/trmj';
import { RevddPage } from '../revdd/revdd';
import { RevdbPage } from '../revdb/revdb';
import { RevmjPage } from '../revmj/revmj';
import { RevwallPage } from '../revwall/revwall';
import { CaratulaPage } from '../caratula/caratula';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dd=DdPage;
  db=DbPage;
  humanz=HumanzPage;
  mj=MjPage;
  wall=WallPage;
  mike=MichaelPage;
  gorillaz=GorillazPage;
  bowie=BowiePage;
  floyd=FloydPage;
  trdb=TrdbPage;
  trdd=TrddPage;
  trwall=TrwallPage;
  trmj=TrmjPage;
  revdd=RevddPage;
  revdb=RevdbPage;
  revmj=RevmjPage;
  revwall=RevwallPage;
  discos=[
    {
      artista: "Gorillaz",
      album: "Demon Days",
      anio: "2005",
      valoracion: [1,2,3,4,5],
      imagen: "../assets/imgs/Gorillazdemondays.jpg",
      color: "#AAAAA",
      id: 0
    },
    {
      artista: "David Bowie",
      album: "Ziggy Stardust",
      anio: "1972",
      valoracion: [1,2,3,4,5],
      imagen: "../assets/imgs/Bowie.jpg",
      color: "#EB5160",
      id:1
    },
    {
      artista: "Pink Floyd",
      album: "The Wall",
      anio: "1979",
      valoracion: [1,2,3,4,5],
      imagen: "../assets/imgs/Wall.jpg",
      color: "#B7999C",
      id: 2
    },
    {
      artista: "Gorillaz",
      album: "Humanz",
      anio: "2017",
      valoracion: [1,2,3,4,5],
      imagen: "../assets/imgs/Humanz.jpg",
      color: "#AAAAA",
      id: 3
    },
    {
      artista: "Michael Jackson",
      album: "Thriller",
      anio: "1982",
      valoracion: [1,2,3,4,5],
      imagen: "../assets/imgs/MJ.jpg",
      color: "#DFE0E5",
      id: 4
    },
  ];
  
  cover=CaratulaPage;

  


  constructor(public navCtrl: NavController) {

  }

  // switchPage(page:number){
  //   switch(page){
  //     case 1:
  //       this.navCtrl.push(this.dd);
  //     break;
  //     case 2:
  //       this.navCtrl.push(this.db);
  //     break;
  //     case 3:
  //       this.navCtrl.push(this.humanz);
  //     break;
  //     case 4:
  //       this.navCtrl.push(this.mj);
  //     break;
  //     case 5:
  //       this.navCtrl.push(this.wall);
  //     break;
  //     case 6:
  //       this.navCtrl.push(this.gorillaz);
  //     break;
  //     case 7:
  //       this.navCtrl.push(this.bowie);
  //     break;
  //     case 8:
  //       this.navCtrl.push(this.floyd);
  //     break;
  //     case 9:
  //       this.navCtrl.push(this.mike);
  //     break;
  //     case 10:
  //       this.navCtrl.push(this.trdd);
  //     break;
  //     case 11:
  //       this.navCtrl.push(this.trdb);
  //     break;
  //     case 12:
  //       this.navCtrl.push(this.trwall);
  //     break;
  //     case 13:
  //       this.navCtrl.push(this.trmj);
  //     break;
  //     case 14:
  //       this.navCtrl.push(this.revdd);
  //     break;
  //     case 15:
  //       this.navCtrl.push(this.revdb);
  //     break;
  //     case 16:
  //       this.navCtrl.push(this.revmj);
  //     break;
  //     case 17:
  //       this.navCtrl.push(this.revwall);
  //     break;
  //   }
  // }
  clickCover(){
    this.navCtrl.push(this.cover);
  }

}
