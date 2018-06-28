import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchDetailsPage } from '../launch-details/launch-details';

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})

export class LaunchListPage {
  launches: any;
  launch: any; 
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllLaunches().subscribe(data => {
      this.launches = data;
    })
  }

  getLaunch(id:string) {
    console.log(id);
    this.navCtrl.push(LaunchDetailsPage, id); 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

}


