import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'build/demo/modules/virtual-scroll/basic/main.html'
})
export class E2EPage {
  items: any[] = [];
  webview: string;

  @ViewChild('content') content: ElementRef;

  constructor(platform: Platform) {
    for (var i = 0; i < 200; i++) {
      this.items.push({
        value: i,
        someMethod: function() {
          return '!!';
        }
      });
    }

    if (platform.is('ios')) {
      if (window.indexedDB) {
        this.webview = ': WKWebView';

      } else {
        this.webview = ': UIWebView';
      }
    }
  }

  headerFn(record: any, index: number, records: any[]) {
    if (index % 4 === 0) {
      return index + ' is divisible by 4';
    }

    return null;
  }

  reload() {
    window.location.reload(true);
  }

}

