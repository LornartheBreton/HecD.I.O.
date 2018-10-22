import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloydPage } from './floyd';

@NgModule({
  declarations: [
    FloydPage,
  ],
  imports: [
    IonicPageModule.forChild(FloydPage),
  ],
})
export class FloydPageModule {}
