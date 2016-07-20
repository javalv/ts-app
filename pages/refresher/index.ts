import {App, Page, Refresher} from 'ionic-angular';
import {Component,Injectable} from '@angular/core';

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
