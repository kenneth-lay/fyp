/* JavaScript Events */


/* Seadragon Events */
Seadragon.Utils.addEvent(window, "load", Init0);

function initialize() {

	originalLatLng = new google.maps.LatLng(22.291371, 114.140232);
	originalMapZoom = 12;
  var mapOptions = 
  {
    zoom: originalMapZoom,
    center: originalLatLng,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  gmap = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);