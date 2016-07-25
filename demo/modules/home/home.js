"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var list_1 = require("../list/list");
var HomePage = (function () {
    function HomePage(nav, params) {
        this.nav = nav;
        this.params = params;
    }
    HomePage.prototype.gotoList = function () {
        var _this = this;
        var loading = ionic_angular_1.Loading.create({
            // spinner: 'hide',
            content: 'Loading Please Wait...'
        });
        this.nav.present(loading).then(function () {
            _this.nav.push(list_1.MyList, {}).then(function () {
                loading.dismiss();
            });
        });
        // setTimeout(() => {
        //   this.nav.push(MyList,{}).then(() => {
        //     loading.dismiss();
        //   });
        // }, 100);
        // setTimeout(() => {
        //   loading.dismiss();
        // }, 5000);
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/demo/modules/home/home.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
