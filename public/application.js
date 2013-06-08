
var map;
function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(40.707621,-73.921831),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    scrollwheel: false,
    streetViewControl: false,
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  google.maps.visualRefresh = true
  transitLayer = new google.maps.TransitLayer();
	transitLayer.setMap(map);

	var styles = [
  {
    stylers: [
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { color: "#ffe867" },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      { color: "#ffffff" },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "simplified" }
    ]
  },{
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      { color: "#F4F4F4" }
    ]
  },{
    featureType: "poi",
    elementType: "label",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      { visibility: "on" },
      { color: "#cdfbe1" }
    ]
  },{
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      { color: "#bdf59e" }
    ]
  },{
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [
      { visibility: "on" },
      { weight: 4 },
      { color: "#222241" }
    ]
  },

  ];

  map.setOptions({styles: styles});
        
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.707621,-73.921831),
      map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

