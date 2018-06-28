import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { RocketDetailsPage } from '../rocket-details/rocket-details';
/**
 * Generated class for the RocketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket',
  templateUrl: 'rocket.html',
})
export class RocketPage {
  rockets : any; 
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllRockets().subscribe(data => {
      this.rockets = data;
    })
  }

  getRocket(id:string) {
    console.log(id);
    this.navCtrl.push(RocketDetailsPage, id); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketPage');
  }

}
