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
  constructor(public navCtrl: NavController) {

  }

  switchPage(page:number){
    switch(page){
      case 1:
        this.navCtrl.push(this.dd);
      break;
      case 2:
        this.navCtrl.push(this.db);
      break;
      case 3:
        this.navCtrl.push(this.humanz);
      break;
      case 4:
        this.navCtrl.push(this.mj);
      break;
      case 5:
        this.navCtrl.push(this.wall);
      break;
      case 6:
        this.navCtrl.push(this.gorillaz);
      break;
      case 7:
        this.navCtrl.push(this.bowie);
      break;
      case 8:
        this.navCtrl.push(this.floyd);
      break;
      case 9:
        this.navCtrl.push(this.mike);
      break;
    }
  }

}
