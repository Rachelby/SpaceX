import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the RocketDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-details',
  templateUrl: 'rocket-details.html',
})
export class RocketDetailsPage {
  rocket: any;
  id : any;
  filtres = {
    flight_number : 60,
  };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
      this.id = this.navParams.data;
      this.spacexApi.getRocket(this.id).subscribe(data => {
      this.rocket = data;
      console.log(this.rocket);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailsPage');
  }

}