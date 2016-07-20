import {InfiniteScroll} from 'ionic-angular';
import {Component,Injectable} from '@angular/core';

/**
 * Mock Data Access Object
 **/
@Injectable()
export class MockProvider {

  getData() {
    // return mock data synchronously
    let data = [];
    for (var i = 0; i < 5; i++) {
      data.push( this._getRandomData() );
    }
    return data;
  }

  getAsyncData() {
    // async receive mock data
    return new Promise(resolve => {

      setTimeout(() => {
        resolve(this.getData());
      }, 1000);

    });
  }

  private _getRandomData() {
    let i = Math.floor( Math.random() * this._data.length );
    return this._data[i];
  }

  private _data = [
    'Fast Times at Ridgemont High',
    'Peggy Sue Got Married',

  ];

}


@Component({
  templateUrl: 'build/pages/infinite-scroll/main.html',
  providers: [MockProvider]
})
export class MyInfiniteScroll {

  items: string[];

  constructor(private mockProvider: MockProvider) {
    this.items = mockProvider.getData();
  }

  hasMore : boolean;
  doInfinite(infiniteScroll: InfiniteScroll) {
    // if(!this.hasMore){
    //   return ;
    // }
    this.mockProvider.getAsyncData().then((newData:string[]) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.push( newData[i] );
      }

      infiniteScroll.complete();

      // if (this.items.length > 90) {
      //   infiniteScroll.enable(false);
      // }

      if(newData.length < 10){
        infiniteScroll.enable(false);
        // this.hasMore = false;
      }

    });
  }

}
