webpackJsonp([7],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rocket_details_rocket_details__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LaunchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchDetailsPage = /** @class */ (function () {
    function LaunchDetailsPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.filtres = {
            flight_number: 60,
        };
        this.id = this.navParams.data;
        this.spacexApi.getLaunch(this.id).subscribe(function (data) {
            _this.launch = data;
            console.log(_this.launch);
        });
    }
    LaunchDetailsPage.prototype.getRocket = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rocket_details_rocket_details__["a" /* RocketDetailsPage */], id);
    };
    LaunchDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaunchDetailsPage');
    };
    LaunchDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launch-details',template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\pages\launch-details\launch-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Détails du lancement</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <pre *ngIf="launch">{{launch | json}}</pre> -->\n\n  <ion-card  *ngIf="launch" >  \n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="{{launch[0].links.mission_patch_small}}">\n\n      </ion-avatar>\n\n      <h2>Mission {{launch[0].mission_name}}</h2>\n\n      <p>Lancement #{{launch[0].flight_number}}</p>\n\n      <p>le {{ launch[0].launch_date_local | date: \'dd/MM/yyyy H:mm\' }}</p>\n\n    </ion-item>\n\n    \n\n    \n\n    <img src="{{launch[0].links.mission_patch}}">\n\n    \n\n    <ion-card-content>\n\n      {{ launch[0].details }}\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button (click)="getRocket(launch[0].rocket.rocket_id)" ion-button icon-start clear small>\n\n          <ion-icon name="ios-jet"></ion-icon>\n\n          <div>Roquette</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\SpaceX\src\pages\launch-details\launch-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], LaunchDetailsPage);
    return LaunchDetailsPage;
}());

//# sourceMappingURL=launch-details.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__launch_details_launch_details__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchListPage = /** @class */ (function () {
    function LaunchListPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.spacexApi.getAllLaunches().subscribe(function (data) {
            _this.launches = data;
        });
    }
    LaunchListPage.prototype.getLaunch = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__launch_details_launch_details__["a" /* LaunchDetailsPage */], id);
    };
    LaunchListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaunchListPage');
    };
    LaunchListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launch-list',template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\pages\launch-list\launch-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Lancements</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <!-- Search bar -->\n\n    <!-- <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of items">\n\n        {{ item }}\n\n      </ion-item>\n\n    </ion-list> -->\n\n  <!-- End search bar -->\n\n\n\n  <div *ngFor="let launch of launches">\n\n    <ion-card *ngIf="launch.details != null">\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          {{launch.mission_name}}\n\n        </ion-card-title>\n\n        <img src="{{launch.links.mission_patch_small}}"/>\n\n        <p>\n\n         \n\n          {{ (launch.details | slice:0:50)  }}\n\n          <a (click)=\'getLaunch(launch.flight_number)\'>Lire la suite</a>\n\n        </p>\n\n  \n\n\n\n        <ion-row no-padding>\n\n          <ion-col text-right>\n\n              <button (click)="getLaunch(launch.flight_number)" ion-button clear small color="danger" icon-start>\n\n                <ion-icon name=\'md-eye\'></ion-icon>\n\n                Détails\n\n              </button>\n\n            </ion-col>\n\n          <ion-col>\n\n            <button ion-button clear small color="danger" icon-start>\n\n              <ion-icon name=\'star\'></ion-icon>\n\n              Favoris\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\SpaceX\src\pages\launch-list\launch-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], LaunchListPage);
    return LaunchListPage;
}());

//# sourceMappingURL=launch-list.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchpadDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LaunchpadDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchpadDetailsPage = /** @class */ (function () {
    function LaunchpadDetailsPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.id = this.navParams.data;
        this.spacexApi.getLaunchpad(this.id).subscribe(function (data) {
            _this.launchpad = data;
            if (_this.launchpad) {
                _this.loadmap();
            }
            else {
                console.log(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
            }
        });
    }
    LaunchpadDetailsPage.prototype.loadmap = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet__["map"]('map', {
            center: [this.launchpad.location.latitude, this.launchpad.location.longitude],
            zoom: 10
        });
        __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            minZoom: 3,
            maxZoom: 14
        }).addTo(this.map);
        var markerGroup = __WEBPACK_IMPORTED_MODULE_3_leaflet__["featureGroup"]();
        var marker = __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"]([this.launchpad.location.latitude, this.launchpad.location.longitude]);
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
    };
    LaunchpadDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launchpad-details',template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\pages\launchpad-details\launchpad-details.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Détails de la base</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <!-- <pre *ngIf="launchpad">{{launchpad | json}}</pre> -->\n\n    <ion-card  *ngIf="launchpad">  \n\n      <ion-item>\n\n        \n\n        <h2> {{ launchpad.full_name }}</h2>\n\n        <!-- <p></p> -->\n\n       \n\n      </ion-item>\n\n      \n\n      <ion-card-content>\n\n        {{ launchpad.details }}\n\n      </ion-card-content>\n\n  \n\n    </ion-card>\n\n    <ion-card  *ngIf="launchpad">  \n\n        <ion-item>\n\n          <p> Localisation : </p> {{ launchpad.location.name }}\n\n          <p>Region : </p> {{ launchpad.location.region }} \n\n          \n\n        </ion-item>\n\n        \n\n        <ion-row>\n\n          <ion-col>\n\n            \n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n      </ion-card>\n\n      <ion-card>\n\n        <div id=\'map\' style="width: 100%; height: 250px;"></div>\n\n      </ion-card>\n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\wamp64\www\SpaceX\src\pages\launchpad-details\launchpad-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], LaunchpadDetailsPage);
    return LaunchpadDetailsPage;
}());

//# sourceMappingURL=launchpad-details.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchpadsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__launchpad_details_launchpad_details__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spacex_api_spacex_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LaunchpadsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchpadsListPage = /** @class */ (function () {
    function LaunchpadsListPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.spacexApi.getAllLaunchpads().subscribe(function (data) {
            _this.launchpads = data;
        });
    }
    LaunchpadsListPage.prototype.getLaunchpad = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__launchpad_details_launchpad_details__["a" /* LaunchpadDetailsPage */], id);
    };
    LaunchpadsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaunchpadsListPage');
    };
    LaunchpadsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launchpads-list',template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\pages\launchpads-list\launchpads-list.html"*/'<!--\n\n  Generated template for the LaunchpadsListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Bases de lancement </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n\n\n<ion-content padding>\n\n      <!-- <pre *ngIf="launchpads">{{launchpads | json}}</pre> -->\n\n  \n\n    <div *ngFor="let launchpad of launchpads">\n\n      <ion-card *ngIf="launchpad.details != null">\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            {{ launchpad.full_name}}\n\n          </ion-card-title>\n\n          <!-- <img src=""/> -->\n\n          <p>\n\n           \n\n            {{ ( launchpad.details | slice:0:50 )  }}\n\n            <a (click)=\'getLaunchpad(launchpad.id)\'>Lire la suite</a>\n\n          </p>\n\n    \n\n  \n\n          <ion-row no-padding>\n\n            <ion-col text-right>\n\n              <button (click)=\'getLaunchpad(launchpad.id)\' ion-button clear small color="danger" icon-start>\n\n                <ion-icon name=\'md-eye\'></ion-icon>\n\n                Détails\n\n              </button>\n\n            </ion-col>\n\n            \n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </ion-content>'/*ion-inline-end:"C:\wamp64\www\SpaceX\src\pages\launchpads-list\launchpads-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], LaunchpadsListPage);
    return LaunchpadsListPage;
}());

//# sourceMappingURL=launchpads-list.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RocketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rocket_details_rocket_details__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RocketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RocketPage = /** @class */ (function () {
    function RocketPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.spacexApi.getAllRockets().subscribe(function (data) {
            _this.rockets = data;
        });
    }
    RocketPage.prototype.getRocket = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rocket_details_rocket_details__["a" /* RocketDetailsPage */], id);
    };
    RocketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RocketPage');
    };
    RocketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rocket',template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\pages\rocket\rocket.html"*/'<!--\n\n  Generated template for the RocketPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Rockets</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n<!-- Search bar -->\n\n  <!-- <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of items">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list> -->\n\n  <!-- End search bar -->\n\n\n\n  <!-- <pre *ngIf="rockets">{{rockets | json}}</pre> -->\n\n  \n\n  <ion-card  *ngFor="let rocket of rockets">\n\n    <!-- <img src="{{launch.links.mission_patch_small}}"/> -->\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{rocket.name}}\n\n        </ion-card-title>\n\n      <p>\n\n        {{rocket.description}}\n\n      </p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\SpaceX\src\pages\rocket\rocket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], RocketPage);
    return RocketPage;
}());

//# sourceMappingURL=rocket.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/launch-details/launch-details.module": [
		285,
		6
	],
	"../pages/launch-list/launch-list.module": [
		286,
		5
	],
	"../pages/launchpad-details/launchpad-details.module": [
		287,
		4
	],
	"../pages/launchpads-list/launchpads-list.module": [
		288,
		3
	],
	"../pages/next-launch/next-launch.module": [
		289,
		2
	],
	"../pages/rocket-details/rocket-details.module": [
		290,
		1
	],
	"../pages/rocket/rocket.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacexApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SpacexApiProvider = /** @class */ (function () {
    function SpacexApiProvider(http) {
        this.http = http;
        this.baseUrl = 'https://api.spacexdata.com/v2';
    }
    // Récuperer liste des prochains lancements 
    SpacexApiProvider.prototype.getNextLaunches = function () {
        var endpointUrl = this.baseUrl + "/launches/upcoming";
        return this.http.get(endpointUrl);
    };
    // Récuperer les détails du prochain lancement 
    SpacexApiProvider.prototype.getNextLaunch = function () {
        var endpointUrl = this.baseUrl + "/launches/next";
        console.log(endpointUrl);
        return this.http.get(endpointUrl);
    };
    // Récuperer tous les lancements 
    SpacexApiProvider.prototype.getAllLaunches = function () {
        var endpointUrl = this.baseUrl + "/launches/all?order=desc";
        return this.http.get(endpointUrl);
    };
    // Recuperer détails d'un lancement 
    SpacexApiProvider.prototype.getLaunch = function (id) {
        var endpointUrl = this.baseUrl + "/launches/all?flight_number=" + id;
        // console.log(endpointUrl);
        return this.http.get(endpointUrl);
    };
    // Recuperer la liste des rockets
    SpacexApiProvider.prototype.getAllRockets = function () {
        var endpointUrl = this.baseUrl + "/rockets";
        return this.http.get(endpointUrl);
    };
    // Recuperer détails d'une rocket
    SpacexApiProvider.prototype.getRocket = function (name) {
        var endpointUrl = this.baseUrl + "/rockets/" + name;
        console.log(endpointUrl);
        return this.http.get(endpointUrl);
    };
    // Récuperer les informations de SpaceX
    SpacexApiProvider.prototype.getInfoSpaceX = function () {
        var endpointUrl = this.baseUrl + "/info";
        console.log(endpointUrl);
        return this.http.get(endpointUrl);
    };
    SpacexApiProvider.prototype.getCapsule = function (name) {
        var endpointUrl = this.baseUrl + "/capsules/" + name;
        console.log(endpointUrl);
        return this.http.get(endpointUrl);
    };
    SpacexApiProvider.prototype.getLaunchpad = function (name) {
        var endpointUrl = this.baseUrl + "/launchpads/" + name;
        console.log(endpointUrl);
        return this.http.get(endpointUrl);
    };
    SpacexApiProvider.prototype.getAllLaunchpads = function () {
        var endpointUrl = this.baseUrl + "/launchpads";
        console.log(endpointUrl);
        return this.http.get(endpointUrl);
    };
    SpacexApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SpacexApiProvider);
    return SpacexApiProvider;
}());

//# sourceMappingURL=spacex-api.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__next_launch_next_launch__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.spacexApi.getInfoSpaceX().subscribe(function (data) {
            _this.info = data;
            // console.log(this.info);
            _this.getCompteur();
        });
    }
    HomePage.prototype.getCompteur = function () {
        var _this = this;
        this.spacexApi.getNextLaunch().subscribe(function (data) {
            _this.time = Math.round(data.launch_date_unix - new Date().getTime() / 1000);
            // this.difference = Math.round(1530482241 - new Date().getTime()/1000); 
            _this.jours = Math.round(_this.time / 86400 - 1);
            var reste = (_this.time % 86400);
            _this.heures = Math.round(reste / 3600 - 1);
            reste = (_this.time % 3600);
            _this.minutes = Math.round(reste / 60);
            reste = _this.time % 60;
            _this.secondes = Math.round(reste % 60);
            console.log(_this.time);
        });
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.secondes > 0)
                _this.secondes--;
            if (_this.secondes == 0) {
                _this.secondes = 59;
                _this.minutes--;
            }
            if (_this.minutes == 0) {
                _this.minutes = 59;
                _this.heures--;
            }
            if (_this.heures == 0) {
                _this.heures = 23;
                _this.jours--;
            }
        }, 1000);
    };
    HomePage.prototype.nextLaunch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__next_launch_next_launch__["a" /* NextLaunchPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Accueil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n   <!-- <pre *ngIf="info">{{ info | json}}</pre> -->\n\n<ion-content class="card-background-page">\n\n   <ion-card class="customborder"  *ngIf="info">  \n\n    <img src="assets/imgs/spacex.jpg"/>\n\n    <div class="card-title">{{ info.name }}</div>\n\n    <!-- <div class="card-subtitle">{{ info.founder }}</div> -->\n\n    \n\n    <div (click)="nextLaunch()" class="card-subtitle">Prochain lancement dans {{ jours }} j {{ heures }} h {{ minutes }} m {{ secondes }} s </div>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="info">\n\n    <ion-card-content>\n\n      {{ info.summary }}\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\SpaceX\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_spacex_api_spacex_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_launch_list_launch_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_launch_details_launch_details__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_next_launch_next_launch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_rocket_rocket__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_rocket_details_rocket_details__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_launchpads_list_launchpads_list__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_launchpad_details_launchpad_details__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_launch_details_launch_details__["a" /* LaunchDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_next_launch_next_launch__["a" /* NextLaunchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rocket_rocket__["a" /* RocketPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_rocket_details_rocket_details__["a" /* RocketDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_launchpads_list_launchpads_list__["a" /* LaunchpadsListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_launchpad_details_launchpad_details__["a" /* LaunchpadDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/launch-details/launch-details.module#LaunchDetailsPageModule', name: 'LaunchDetailsPage', segment: 'launch-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launch-list/launch-list.module#LaunchListPageModule', name: 'LaunchListPage', segment: 'launch-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launchpad-details/launchpad-details.module#LaunchpadDetailsPageModule', name: 'LaunchpadDetailsPage', segment: 'launchpad-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launchpads-list/launchpads-list.module#LaunchpadsListPageModule', name: 'LaunchpadsListPage', segment: 'launchpads-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/next-launch/next-launch.module#NextLaunchPageModule', name: 'NextLaunchPage', segment: 'next-launch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rocket-details/rocket-details.module#RocketDetailsPageModule', name: 'RocketDetailsPage', segment: 'rocket-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rocket/rocket.module#RocketPageModule', name: 'RocketPage', segment: 'rocket', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_launch_details_launch_details__["a" /* LaunchDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_next_launch_next_launch__["a" /* NextLaunchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rocket_rocket__["a" /* RocketPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_rocket_details_rocket_details__["a" /* RocketDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_launchpads_list_launchpads_list__["a" /* LaunchpadsListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_launchpad_details_launchpad_details__["a" /* LaunchpadDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spacex_api_spacex_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_launch_list_launch_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_next_launch_next_launch__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_rocket_rocket__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_launchpads_list_launchpads_list__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, spacexApi) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.spacexApi = spacexApi;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.spacexApi.getNextLaunches().subscribe(function (data) {
            _this.launches = data;
        });
        this.spacexApi.getNextLaunch().subscribe(function (data) {
            _this.launch = data;
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Liste lancements', component: __WEBPACK_IMPORTED_MODULE_6__pages_launch_list_launch_list__["a" /* LaunchListPage */] },
            { title: 'Prochain lancement', component: __WEBPACK_IMPORTED_MODULE_7__pages_next_launch_next_launch__["a" /* NextLaunchPage */] },
            { title: 'Rockets', component: __WEBPACK_IMPORTED_MODULE_8__pages_rocket_rocket__["a" /* RocketPage */] },
            { title: 'Bases de lancement', component: __WEBPACK_IMPORTED_MODULE_9__pages_launchpads_list_launchpads_list__["a" /* LaunchpadsListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n    <!-- <p *ngIf="launch">{{launch.flight_number}}</p> -->\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\wamp64\www\SpaceX\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\SpaceX\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RocketDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RocketDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RocketDetailsPage = /** @class */ (function () {
    function RocketDetailsPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.filtres = {
            flight_number: 60,
        };
        this.id = this.navParams.data;
        this.spacexApi.getRocket(this.id).subscribe(function (data) {
            _this.rocket = data;
            console.log(_this.rocket);
        });
    }
    RocketDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RocketDetailsPage');
    };
    RocketDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rocket-details',template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\pages\rocket-details\rocket-details.html"*/'<!--\n\n  Generated template for the RocketDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title> Détails de la Rocket</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content padding>\n\n      <!-- <pre *ngIf="rocket">{{rocket | json}}</pre> -->\n\n      <ion-card  *ngIf="rocket">  \n\n    \n\n    \n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n          </ion-avatar>\n\n          <h2>{{rocket.name}}</h2>\n\n        </ion-item>\n\n      \n\n      \n\n        <ion-card-content>\n\n          <p>{{ rocket.description }}</p>\n\n        </ion-card-content>\n\n      \n\n        <ion-row>\n\n          \n\n          <!-- <ion-col>\n\n            <button ion-button icon-start clear small>\n\n              <ion-icon name="text"></ion-icon>\n\n              <div>4 Comments</div>\n\n            </button>\n\n          </ion-col> -->\n\n         \n\n        </ion-row>\n\n      \n\n      </ion-card>\n\n    \n\n      \n\n    </ion-content>'/*ion-inline-end:"C:\wamp64\www\SpaceX\src\pages\rocket-details\rocket-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], RocketDetailsPage);
    return RocketDetailsPage;
}());

//# sourceMappingURL=rocket-details.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextLaunchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NextLaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NextLaunchPage = /** @class */ (function () {
    function NextLaunchPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.spacexApi.getNextLaunch().subscribe(function (data) {
            _this.launch = data;
            // console.log(JSON.stringify(this.launch));
            _this.getCompteur();
        });
    }
    NextLaunchPage.prototype.getCompteur = function () {
        var _this = this;
        this.spacexApi.getNextLaunch().subscribe(function (data) {
            _this.time = Math.round(data.launch_date_unix - new Date().getTime() / 1000);
            // this.difference = Math.round(1530482241 - new Date().getTime()/1000); 
            _this.jours = Math.round(_this.time / 86400 - 1);
            var reste = (_this.time % 86400);
            _this.heures = Math.round(reste / 3600 - 1);
            reste = (_this.time % 3600);
            _this.minutes = Math.round(reste / 60);
            reste = _this.time % 60;
            _this.secondes = Math.round(reste % 60);
            console.log(_this.time);
        });
    };
    NextLaunchPage.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.secondes > 0)
                _this.secondes--;
            if (_this.secondes == 0) {
                _this.secondes = 59;
                _this.minutes--;
            }
            if (_this.minutes == 0) {
                _this.minutes = 59;
                _this.heures--;
            }
            if (_this.heures == 0) {
                _this.heures = 23;
                _this.jours--;
            }
        }, 1000);
    };
    NextLaunchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NextLaunchPage');
    };
    NextLaunchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-next-launch',template:/*ion-inline-start:"C:\wamp64\www\SpaceX\src\pages\next-launch\next-launch.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Prochain lancement</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n \n\n  <ion-content class="card-background-page">\n\n      <!-- <pre *ngIf="launch">{{ launch | json}}</pre> -->\n\n\n\n      <ion-card  *ngIf="launch">  \n\n       <img src="assets/imgs/spacex.jpg"/>\n\n       <div class="card-title">{{ jours }} j {{ heures }} h {{ minutes }} m {{ secondes }} s</div>\n\n      \n\n       <div class="card-subtitle">{{ launch.mission_name }} </div>\n\n     </ion-card>\n\n   \n\n     <ion-card *ngIf="launch">\n\n       <ion-card-content>\n\n        <p>{{ launch.details }}</p>\n\n        <p>le {{ launch.launch_date_local | date: \'dd/MM/yyyy H:mm\' }}</p>\n\n        <p>{{ launch.launch_site.site_name_long}}</p>\n\n       </ion-card-content>\n\n     </ion-card>\n\n     <ion-card *ngIf="launch">\n\n        <ion-card-content>\n\n          <h2> Détails sur la rocket </h2>\n\n          <p>{{ launch.rocket.rocket_name }}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n   \n\n   </ion-content>\n\n\n\n   '/*ion-inline-end:"C:\wamp64\www\SpaceX\src\pages\next-launch\next-launch.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_spacex_api_spacex_api__["a" /* SpacexApiProvider */]) === "function" && _c || Object])
    ], NextLaunchPage);
    return NextLaunchPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=next-launch.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map