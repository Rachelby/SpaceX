import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchesDetailsPage } from './launches-details';

@NgModule({
  declarations: [
    LaunchesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchesDetailsPage),
  ],
})
export class LaunchesDetailsPageModule {}
