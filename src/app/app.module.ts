import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DdPage } from '../pages/dd/dd';
import { DbPage } from '../pages/db/db';
import { HumanzPage } from '../pages/humanz/humanz';
import { MjPage } from '../pages/mj/mj';
import { WallPage } from '../pages/wall/wall';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DdPage,
    DbPage,
    HumanzPage,
    MjPage,
    WallPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DdPage,
    DbPage,
    HumanzPage,
    MjPage,
    WallPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
