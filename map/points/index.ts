import {NavController, NavParams, ViewController, Loading} from 'ionic-angular';
import {Component, Injectable} from '@angular/core'
import {HttpService} from '../service/httpService';
declare var BMap:any;
declare var BMAP_POINT_SIZE_SMALL;
declare var BMap_Symbol_SHAPE_POINT;

@Component({
  templateUrl: 'build/map/points/main.html',
  providers: [HttpService],
})
export class MapPoints {
  item:any;

  constructor(public params:NavParams,
              public nav:NavController,
              public viewCtrl:ViewController,
              public http:HttpService) {

    this.item = {};

  }


  ionViewWillEnter() {

    if(document.getElementById("mapbox")){
      setTimeout(() => {
        // 百度地图API功能
        var map = new BMap.Map("mapbox");            // 创建Map实例
        var point = new BMap.Point(116.404, 39.915); // 创建点坐标
        map.centerAndZoom(point,5);                 // 初始化地图,设置中心点坐标和地图级别。
        // map.addControl(new BMap.ZoomControl());      //添加地图缩放控件

        var points = [];
        this.http.getAsyncData().then((result:any)=>{
          var datas = result.data;
          for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            var point = new BMap.Point(data.lng, data.lat);
            points[i] = point;

          }

          var options = {
            size: BMAP_POINT_SIZE_SMALL,
            shape: BMap_Symbol_SHAPE_POINT,
            color: 'blue'
          }

          var index = 0;
          var size = 200;
          setInterval(function () {
            var plist = points.slice(size * index, size * (index + 1));
            var pointCollection = new BMap.PointCollection(plist, options);  // 初始化PointCollection
            pointCollection.addEventListener('click', function (e) {
              //alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
            });
            map.addOverlay(pointCollection);  // 添加Overlay
            if (index++ >= points.length) {
              return;
            }
          }, 800);

        })

      },1000)
    }


  }
}



