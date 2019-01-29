import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

// Firebase Config
import { FIREBASE_CONFIG } from './firebase.credentials';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { AuthService } from '../pages/services/auth.service';
import { FirebaseService } from '../pages/services/firebase.service';

import {  ImagePicker } from '@ionic-native/image-picker';
import { AddNewTaskPage } from '../pages/add-new-task/add-new-task';
import { DetailPage } from '../pages/detail/detail';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    MenuPage,
    AddNewTaskPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    MenuPage,
    AddNewTaskPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    FirebaseService,
    ImagePicker
  ]
})
export class AppModule {}
