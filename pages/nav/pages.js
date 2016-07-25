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
var detail_1 = require('../../pages/nav/detail');
var MyNav = (function () {
    function MyNav(nav) {
        this.nav = nav;
        this.items = [];
        this.items = [
            {
                'title': 'Angular',
                'icon': 'angular',
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'color': '#E63135'
            },
            {
                'title': 'CSS3',
                'icon': 'css3',
                'description': 'The latest version of cascading stylesheets - the styling language of the web!',
                'color': '#0CA9EA'
            },
            {
                'title': 'HTML5',
                'icon': 'html5',
                'description': 'The latest version of the web\'s markup language.',
                'color': '#F46529'
            },
            {
                'title': 'JavaScript',
                'icon': 'javascript',
                'description': 'One of the most popular programming languages on the Web!',
                'color': '#FFD439'
            },
            {
                'title': 'Sass',
                'icon': 'sass',
                'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
                'color': '#CE6296'
            },
            {
                'title': 'NodeJS',
                'icon': 'nodejs',
                'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
                'color': '#78BD43'
            },
            {
                'title': 'Python',
                'icon': 'python',
                'description': 'A clear and powerful object-oriented programming language!',
                'color': '#3575AC'
            },
            {
                'title': 'Markdown',
                'icon': 'markdown',
                'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
                'color': '#412159'
            },
            {
                'title': 'Tux',
                'icon': 'tux',
                'description': 'The official mascot of the Linux kernel!',
                'color': '#000'
            },
        ];
    }
    MyNav.prototype.openNavDetailsPage = function (item) {
        this.nav.push(detail_1.NavigationDetailsPage, { item: item });
    };
    MyNav = __decorate([
        core_1.Component({
            templateUrl: './build/pages/nav/navigation.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], MyNav);
    return MyNav;
}());
exports.MyNav = MyNav;
