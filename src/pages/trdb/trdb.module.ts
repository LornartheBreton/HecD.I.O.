import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrdbPage } from './trdb';

@NgModule({
  declarations: [
    TrdbPage,
  ],
  imports: [
    IonicPageModule.forChild(TrdbPage),
  ],
})
export class TrdbPageModule {}
