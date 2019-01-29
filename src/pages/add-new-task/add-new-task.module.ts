import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewTaskPage } from './add-new-task';

@NgModule({
  declarations: [
    AddNewTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewTaskPage),
  ],
})
export class AddNewTaskPageModule {}
