import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  validations_form: FormGroup;
  errorMessage: string = '';

  validation_messages = {
   'email': [
     { type: 'required', message: 'อีเมล์จำเป็น' },
     { type: 'pattern', message: 'กรุณากรอกอีเมล์ก่อน.' }
   ],
   'password': [
     { type: 'required', message: 'รหัสผ่านจำเป็น.' },
     { type: 'minlength', message: 'รหัสผ่านต้องไม่น้อยกว่า 6 ตัวอักษร.' }
   ]
 };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
  }

  ionViewWillLoad() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

 // ส่งไปหน้าลงทะเบียน
 goRegisterPage(){
  this.navCtrl.push(RegisterPage);
 }

}
