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
var details_1 = require('../../modules/detail/details');
var MyList = (function () {
    function MyList(params, nav) {
        // console.info(params)
        this.params = params;
        this.nav = nav;
        // setTimeout(() => {
        this._data = [
            {
                name: "炎亚纶睡不著演唱会",
                pic: "img/lyd.jpg",
                time: "2016-10-10"
            }, {
                name: "李云迪演唱会",
                pic: "img/lyd.jpg",
                time: "2016-10-10"
            }, {
                name: "周华健演唱会",
                pic: "img/zhj.png",
                time: "2016-10-10"
            }, {
                name: "炎亚纶睡不著演唱会",
                pic: "img/lyd.jpg",
                time: "2016-10-10"
            }
        ];
        this.items = this.getData();
        // }, 1000)
    }
    MyList.prototype.doRefresh = function (refresher) {
        console.log('DOREFRESH', refresher);
        var data = [
            {
                name: "炎亚纶睡不著演唱会",
                pic: "img/lyd.jpg",
                time: "2016-10-10"
            }, {
                name: "李云迪演唱会",
                pic: "img/lyd.jpg",
                time: "2016-10-10"
            }, {
                name: "周华健演唱会",
                pic: "img/zhj.png",
                time: "2016-10-10"
            }, {
                name: "炎亚纶睡不著演唱会",
                pic: "img/lyd.jpg",
                time: "2016-10-10"
            }
        ];
        var items = this.items;
        setTimeout(function () {
            for (var i = 0; i < data.length; i++) {
                items.unshift(data[i]);
            }
            refresher.complete();
        }, 1000);
    };
    MyList.prototype.doPulling = function (refresher) {
        console.log('DOPULLING', refresher.progress);
    };
    MyList.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.getAsyncData().then(function (newData) {
            for (var i = 0; i < newData.length; i++) {
                _this.items.push(newData[i]);
            }
            infiniteScroll.complete();
            if (newData.length < 10) {
                infiniteScroll.enable(false);
            }
        });
    };
    MyList.prototype.getData = function () {
        // return mock data synchronously
        var data = [];
        for (var i = 0; i < 10; i++) {
            data.push(this._getRandomData());
        }
        return data;
    };
    MyList.prototype.getAsyncData = function () {
        var _this = this;
        // async receive mock data
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.getData());
            }, 1000);
        });
    };
    MyList.prototype._getRandomData = function () {
        var i = Math.floor(Math.random() * this._data.length);
        return this._data[i];
    };
    MyList.prototype.gotoDetail = function () {
        this.nav.push(details_1.MyDetail, {});
    };
    MyList = __decorate([
        core_1.Component({
            templateUrl: 'build/demo/modules/list/list.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavParams, ionic_angular_1.NavController])
    ], MyList);
    return MyList;
}());
exports.MyList = MyList;
