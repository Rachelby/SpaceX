import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchpadDetailsPage } from '../launchpad-details/launchpad-details';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
/**
 * Generated class for the LaunchpadsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpads-list',
  templateUrl: 'launchpads-list.html',
})
export class LaunchpadsListPage {
  launchpads: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllLaunchpads().subscribe(data => {
      this.launchpads = data;
    })
  }

  getLaunchpad(id:string) {
    this.navCtrl.push(LaunchpadDetailsPage, id); 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadsListPage');
  }

}





