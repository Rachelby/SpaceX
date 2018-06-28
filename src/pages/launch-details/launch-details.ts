import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { RocketDetailsPage } from '../rocket-details/rocket-details';
/**
 * Generated class for the LaunchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-details',
  templateUrl: 'launch-details.html',
})
export class LaunchDetailsPage {
  launch: any;
  id : any;
  filtres = {
    flight_number : 60,
  };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
      this.id = this.navParams.data;
      this.spacexApi.getLaunch(this.id).subscribe(data => {
      this.launch = data;
      console.log(this.launch);
    })
  }
  getRocket(id:string) {
    console.log(id);
    this.navCtrl.push(RocketDetailsPage, id); 
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailsPage');
  }

}




