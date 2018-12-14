import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BrowsePage } from '../pages/browse/browse';
import {RegistroPage} from "../pages/registro/registro";
import {IonicStorageModule} from "@ionic/storage";
import { ProductPage } from "../pages/product/product"
import { CartPage } from "../pages/cart/cart";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    BrowsePage,
    ProductPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    BrowsePage,
    ProductPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
