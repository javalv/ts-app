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
var MyRefresher = (function () {
    function MyRefresher() {
        this._data = [
            'Fast Times at Ridgemont High',
            'Peggy Sue Got Married',
            'Raising Arizona',
            'Moonstruck'
        ];
        this.items = this._data;
    }
    MyRefresher.prototype.doRefresh = function (refresher) {
        console.log('DOREFRESH', refresher);
        var data = [
            'Fast Times at Ridgemont High',
            'Peggy Sue Got Married',
            'Raising Arizona',
            'Moonstruck',
            'Fire Birds',
            'Honeymoon in Vegas',
            'Amos & Andrew',
            'It Could Happen to You',
            'Trapped in Paradise',
            'Leaving Las Vegas',
            'The Rock',
            'Con Air',
            'Face/Off',
            'City of Angels',
            'Gone in Sixty Seconds',
            'The Family Man',
            'Windtalkers',
            'Matchstick Men',
            'National Treasure',
            'Ghost Rider',
            'Grindhouse',
            'Next',
            'Kick-Ass',
            'Drive Angry',
        ];
        var items = this.items;
        setTimeout(function () {
            for (var i = 0; i < data.length; i++) {
                items.unshift(data[i]);
            }
            refresher.complete();
        }, 1000);
    };
    MyRefresher.prototype.doPulling = function (refresher) {
        console.log('DOPULLING', refresher.progress);
    };
    MyRefresher = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/refresher/main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MyRefresher);
    return MyRefresher;
}());
exports.MyRefresher = MyRefresher;
