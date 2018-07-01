import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { NextLaunchPage } from '../next-launch/next-launch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: any;
  time: number;
  launch: any; 
  difference: any; 
  jours: number; 
  heures: number; 
  minutes: number; 
  secondes: number; 
 
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
      this.spacexApi.getInfoSpaceX().subscribe(data => {
      this.info = data;
      // console.log(this.info);
      this.getNextLaunch();

    })
  }

  getNextLaunch(){
    this.spacexApi.getNextLaunch().subscribe(data => {
      this.time = Math.round(data.launch_date_unix - new Date().getTime()/1000); 

      // this.difference = Math.round(1530482241 - new Date().getTime()/1000); 

      this.jours = Math.round(this.time/86400); 
      let reste = (this.time%86400); 
      this.heures = Math.round(reste/3600);
      reste = (this.time%3600);
      this.minutes = Math.round(reste/60); 
      reste = this.time%60; 
      this.secondes = Math.round(reste%60)


      console.log(this.time); 
    }); 
  }


  ngOnInit() {
      setInterval(() => { 
        if ( this.secondes > 0 ) this.secondes--; 
        if ( this.secondes == 0 ) {this.secondes = 59; this.minutes--; } 
        if ( this.minutes == 0 ) {this.minutes = 59; this.heures--; } 
        if ( this.heures == 0 ) {this.heures = 23; this.jours--; }
      }, 1000);
      
  }

  nextLaunch(){
    this.navCtrl.push(NextLaunchPage); 
  }
  




  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
