import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RevdbPage } from './revdb';

@NgModule({
  declarations: [
    RevdbPage,
  ],
  imports: [
    IonicPageModule.forChild(RevdbPage),
  ],
})
export class RevdbPageModule {}
