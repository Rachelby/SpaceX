import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchesListPage } from './launches-list';

@NgModule({
  declarations: [
    LaunchesListPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchesListPage),
  ],
})
export class LaunchesListPageModule {}
