import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the NextLaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next-launch',
  templateUrl: 'next-launch.html',
})
export class NextLaunchPage {
  launch: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
    this.spacexApi.getNextLaunch().subscribe(data => {
      this.launch = data;
      // console.log(JSON.stringify(this.launch));
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextLaunchPage');
  }

}
