import { Component } from '@angular/core';


@Component({
  templateUrl: 'build/demo/modules/virtual-scroll/variable-size/main.html',
})
export class E2EPageSize {
  items: any[] = [];

  constructor() {

    for (var i = 0; i < 5000; i++) {

      this.items.push({
        isHeader: ((i % 10) === 0),
        fontSize: Math.floor((Math.random() * 32) + 16) + 'px',
        item: i
      });

    }
  }

  headerFn(record: any, recordIndex: number) {
    if (recordIndex > 0 && recordIndex % 100 === 0) {
      return recordIndex;
    }
    return null;
  }

}

