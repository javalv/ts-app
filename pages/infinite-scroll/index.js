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
/**
 * Mock Data Access Object
 **/
var MockProvider = (function () {
    function MockProvider() {
        this._data = [
            'Fast Times at Ridgemont High',
            'Peggy Sue Got Married',
        ];
    }
    MockProvider.prototype.getData = function () {
        // return mock data synchronously
        var data = [];
        for (var i = 0; i < 5; i++) {
            data.push(this._getRandomData());
        }
        return data;
    };
    MockProvider.prototype.getAsyncData = function () {
        var _this = this;
        // async receive mock data
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.getData());
            }, 1000);
        });
    };
    MockProvider.prototype._getRandomData = function () {
        var i = Math.floor(Math.random() * this._data.length);
        return this._data[i];
    };
    MockProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MockProvider);
    return MockProvider;
}());
exports.MockProvider = MockProvider;
var MyInfiniteScroll = (function () {
    function MyInfiniteScroll(mockProvider) {
        this.mockProvider = mockProvider;
        this.items = mockProvider.getData();
    }
    MyInfiniteScroll.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        // if(!this.hasMore){
        //   return ;
        // }
        this.mockProvider.getAsyncData().then(function (newData) {
            for (var i = 0; i < newData.length; i++) {
                _this.items.push(newData[i]);
            }
            infiniteScroll.complete();
            // if (this.items.length > 90) {
            //   infiniteScroll.enable(false);
            // }
            if (newData.length < 10) {
                infiniteScroll.enable(false);
            }
        });
    };
    MyInfiniteScroll = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/infinite-scroll/main.html',
            providers: [MockProvider]
        }), 
        __metadata('design:paramtypes', [MockProvider])
    ], MyInfiniteScroll);
    return MyInfiniteScroll;
}());
exports.MyInfiniteScroll = MyInfiniteScroll;
