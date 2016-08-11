import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

/**
 *
 **/
@Injectable()
export class HttpService {

  private http:Http;
  constructor(http:Http) {
    this.http = http;
  }

  getAsyncData() {
    // async receive http data
    return new Promise(resolve => {
      this.http.get('json/venues.json')
        .subscribe(data => {
          var json = data.json();
          resolve(json);
        });
    });
  }

  getOne() {
    // async receive http data
    return new Promise(resolve => {
      this.http.get('json/people.json')
        .subscribe(data => {
          var json = data.json();
          resolve(json);
        });
    });
  }


}




