import {NavController, NavParams, ViewController, Loading} from 'ionic-angular';
import {Component, Injectable} from '@angular/core'
import {HttpService} from '../service/httpService';
declare var BMap:any;
declare var BMAP_ANIMATION_BOUNCE:any;

@Component({
  templateUrl: 'build/map/actual/main.html',
  providers: [HttpService],
})
export class MapActual {
  item:any;
  pointData:any[]
  constructor(public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController,
              public http:HttpService) {

    this.item = {};

  }


  ionViewWillEnter() {

    this.pointData = [
      {
        "id": "001",
        "lng": "116.307901",
        "lat": "40.05901",
        "status": 1,
        "st": "2016-08-01 10:09:00"
      },
      {
        "id": "002",
        "lng": "116.313082",
        "lat": "40.047674",
        "status": 1,
        "st": "2016-08-02 10:09:00"
      },
      {
        "id": "003",
        "lng": "116.347571",
        "lat": "39.988698",
        "status": 1,
        "st": "2016-08-03 10:09:00"
      },
      {
        "id": "004",
        "lng": "116.345867",
        "lat": "39.998333",
        "status": 1,
        "st": "2016-08-04 10:09:00"
      },
      {
        "id": "005",
        "lng": "116.307852",
        "lat": "40.057031",
        "status": 1,
        "st": "2016-08-05 10:09:00"
      }
    ]

    var myStyleJson = [
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": {
          "color": "#cccccc",
          "hue": "#d9d2e9"
        }
      },
      {
        "featureType": "background",
        "elementType": "all",
        "stylers": {
          "color": "#a2c4c9",
          "hue": "#ffffff"
        }
      }
    ];

    if(document.getElementById("mapbox2")){
      setTimeout(() => {
        // 百度地图API功能
        var map = new BMap.Map("mapbox2");            // 创建Map实例
        var point = new BMap.Point(116.307852, 40.057031); // 创建点坐标
        map.centerAndZoom(point,12);                 // 初始化地图,设置中心点坐标和地图级别。

        var ref = {};
        // this.pointData.forEach(function (point , index) {
        //   //跳跃
        //   var point = new BMap.Point(point.lng, point.lat);
        //   var marker = new BMap.Marker(point);  // 创建标注
        //   map.addOverlay(marker);               // 将标注添加到地图中
        //   ref[index] = point;
        //   marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        // })

        let index = 0;
          setInterval(() => {
            if(index < this.pointData.length){
              var point = this.pointData[index++];
              var marker = new BMap.Marker(point);  // 创建标注
              map.addOverlay(marker);               // 将标注添加到地图中
              marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            }
          },1000)


      },1000)
    }


  }
}



