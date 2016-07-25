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
var home_1 = require("../../demo/modules/home/home");
var list_1 = require("../../demo/modules/list/list");
var details_1 = require('../../demo/modules/detail/details');
var NameService = (function () {
    function NameService() {
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
    NameService.prototype.getNames = function () {
        return this.names;
    };
    NameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NameService);
    return NameService;
}());
exports.NameService = NameService;
var Routing = (function () {
    function Routing(nav) {
        this.nav = nav;
        this.mapping = {
            "home": home_1.HomePage,
            "list": list_1.MyList,
            "detail": details_1.MyDetail
        };
    }
    Routing.prototype.navTo = function (path, params) {
        var page = this.mapping[path];
        this.nav.push(page, params);
    };
    Routing = __decorate([
        core_1.Component({
            // selector: 'my-app',
            providers: [NameService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], Routing);
    return Routing;
}());
exports.Routing = Routing;
