import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { NextLaunchPage } from '../pages/next-launch/next-launch';
import { RocketPage } from '../pages/rocket/rocket';
import { LaunchpadsListPage } from '../pages/launchpads-list/launchpads-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;
  launches: Launch[];
  launch: Launch;


    constructor(public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      private spacexApi: SpacexApiProvider) {
  
      this.spacexApi.getNextLaunches().subscribe(data => {
        this.launches = data;
      });
      
      this.spacexApi.getNextLaunch().subscribe(data => {
        this.launch = data;
      });


      
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'Liste lancements', component: LaunchListPage },
      { title: 'Prochain lancement', component: NextLaunchPage},
      { title: 'Rockets', component: RocketPage},
      { title: 'Bases de lancement', component: LaunchpadsListPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
