import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../services/auth.service';
import { AddNewTaskPage } from '../add-new-task/add-new-task';
import { FirebaseService } from '../services/firebase.service';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  items: Array<any>;

  constructor(
    public navCtrl: NavController, 
    private modalCtrl: ModalController,
    public navParams: NavParams,
    public authService: AuthService,
    public firebaseService: FirebaseService) {
  }

  getData(){
    this.firebaseService.getTasks()
    .then(tasks => {
      this.items = tasks;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  //  ออกจากระบบ
  logout(){
    this.authService.doLogout()
    .then(res => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

  // ส่วนของการเรียกเปิดไปหน้า add-new-task
  openNewUserModal(){
    let modal = this.modalCtrl.create(AddNewTaskPage);
    modal.onDidDismiss(data => {
      this.getData();
    });
    modal.present();
  }

}
