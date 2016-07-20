/**
 * Created by lin on 16/7/20.
 */
import {Component,Injectable} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Routing} from '../route/route';
@Component({
    // selector: 'my-app',
    providers: [Routing]
})
export class BasePage {

    private routing: Routing;

    constructor() {
    }

    //constructor(pageName:string) {
    //    this.routing = new Routing();
    //}

    public navTo(path:string , params:any) {
        this.routing.navTo(path,params);
    }
}
