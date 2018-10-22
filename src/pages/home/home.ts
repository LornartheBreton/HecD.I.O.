import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DdPage } from '../dd/dd';
import { DbPage } from '../db/db';
import { HumanzPage } from '../humanz/humanz';
import { MjPage } from '../mj/mj';
import { WallPage } from '../wall/wall';

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
    }
  }

}
