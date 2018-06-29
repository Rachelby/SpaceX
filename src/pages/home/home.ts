import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: any;
 
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
      this.spacexApi.getInfoSpaceX().subscribe(data => {
      this.info = data;
      console.log(this.info);
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
