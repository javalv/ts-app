import {App, Page, Refresher} from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
    templateUrl: 'build/pages/refresher/main.html'
})
export class MyRefresher {
    items:string[];
    private _data = [
        'Fast Times at Ridgemont High',
        'Peggy Sue Got Married',
        'Raising Arizona',
        'Moonstruck'
    ];

    constructor() {
        this.items = this._data;
    }

    doRefresh(refresher:Refresher) {
        console.log('DOREFRESH', refresher);

        var data = [
            '张三',
            '里斯',
            '王五',
            '里斯',
            '张三',
            '里斯',
            '张三',
            '里斯',
            '王五',
            '里斯',
            '张三',
            '里斯',
        ];
        var items = this.items;

        setTimeout(() => {
            for (var i = 0; i < data.length; i++) {
                items.unshift(data[i]);
            }
            refresher.complete();
        }, 1000);

    }

    doPulling(refresher:Refresher) {
        console.log('DOPULLING', refresher.progress);
    }
}
