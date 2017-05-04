
//获得地址“北京市海淀区上地10街10号”的地理坐标位置，并在这个位置上添加一个标注
var map = new BMap.Map("myMap");
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
// 创建地址解析器实例     
var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上，并调整地图视野    
myGeo.getPoint("杭州市余杭区海曙路58号", function(point) {
  if (point) {
    map.centerAndZoom(point, 16);
    map.addOverlay(new BMap.Marker(point));
  }
}, "杭州市");