import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchpadsListPage } from './launchpads-list';

@NgModule({
  declarations: [
    LaunchpadsListPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchpadsListPage),
  ],
})
export class LaunchpadsListPageModule {}
