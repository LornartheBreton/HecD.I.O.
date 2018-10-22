import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BowiePage } from './bowie';

@NgModule({
  declarations: [
    BowiePage,
  ],
  imports: [
    IonicPageModule.forChild(BowiePage),
  ],
})
export class BowiePageModule {}
