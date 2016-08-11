import {NavController, NavParams, ViewController, Loading} from 'ionic-angular';
import {Component, Injectable} from '@angular/core'
import {HttpService} from '../service/httpService';
declare var BMap:any;
declare var BMapLib:any;

@Component({
  templateUrl: 'build/map/hots/main.html',
  providers: [HttpService],
})
export class MapHots {
  item:any;

  constructor(public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController,
              public http:HttpService) {

    this.item = {};

  }


  ionViewWillEnter() {

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

    if(document.getElementById("mapbox")){
      setTimeout(() => {
        var map = new BMap.Map("mapbox1");
        map.centerAndZoom(new BMap.Point(116.354, 40.000), 5);
        map.enableScrollWheelZoom(true);
        map.setMapStyle({styleJson: myStyleJson});
        var hots = [];
        this.http.getAsyncData().then((result:any)=>{
          var datas = result.data;
          for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            hots[i] = {
              lng: data.lng,
              lat: data.lat,
              count: Math.random() * 100
            }

          }

          var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius": 20});
          map.addOverlay(heatmapOverlay);
          heatmapOverlay.setDataSet({data: hots, max: 100})

        })

      },1000)
    }


  }
}



