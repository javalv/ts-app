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
var ionic_angular_1 = require('ionic-angular');
var core_1 = require('@angular/core');
var MyAlert = (function () {
    function MyAlert(nav) {
        this.nav = nav;
        //this.nav = nav;
    }
    MyAlert.prototype.doAlert = function () {
        var alert = ionic_angular_1.Alert.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['Ok']
        });
        this.nav.present(alert);
    };
    MyAlert = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/alert/main.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], MyAlert);
    return MyAlert;
}());
exports.MyAlert = MyAlert;
