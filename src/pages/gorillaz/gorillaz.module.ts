import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GorillazPage } from './gorillaz';

@NgModule({
  declarations: [
    GorillazPage,
  ],
  imports: [
    IonicPageModule.forChild(GorillazPage),
  ],
})
export class GorillazPageModule {}
