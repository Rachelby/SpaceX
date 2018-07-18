import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import leaflet from 'leaflet';

/**
 * Generated class for the LaunchpadDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-details',
  templateUrl: 'launchpad-details.html',
})
export class LaunchpadDetailsPage {
  launchpad: any;
  id : any;
  map: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
      this.id = this.navParams.data;
      this.spacexApi.getLaunchpad(this.id).subscribe(data => {
      this.launchpad = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadDetailsPage');
  }
}
