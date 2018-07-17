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


  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    // On tinitialise la carte
    this.map = leaflet.map("map", {
      center: [this.launchpad.location.latitude, this.launchpad.location.longitude],
      zoom: 10
    })

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      minZoom: 3,
      maxZoom: 14
    }).addTo(this.map);

    // On rajoute un marqueur sur le point de lancement
    let markerGroup = leaflet.featureGroup();
    let marker: any = leaflet.marker([this.launchpad.location.latitude, this.launchpad.location.longitude]);
    markerGroup.addLayer(marker);
    this.map.addLayer(markerGroup);
  }
}
