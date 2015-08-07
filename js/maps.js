//Keith Eastman
//keastma4@my.smccd.edu
//CIS 114 OL
//maps.js
//Final
//05.29.2015

var myLatlng = new google.maps.LatLng(37.479337, -122.216376);

function initialize() {
	var mapOptions = {
		zoom: 14,
		center: myLatlng
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);
	for (var i = 0; i < sites.length; i++) {
		addMarker(sites[i], i * 150);
	}
}

var sites = [
  ['John Bentley\'s Restaurant', 37.468437, -122.211119,
	"Urban-style eatery serving Californian cuisine in a handsome space that suits special occasions."],
  ['Donato Enoteca', 37.483337, -122.226643, 
	"Contemporary Italian plates & wood-fired pizzas in a multiroom space with an open kitchen & a patio."],
  ['Old Port Lobster Shack', 37.489633, -122.228315, 
	"Maine-style seafood like lobster rolls & chowder eaten in reproduction-wharf-shack quarters."],
  ['Alana\'s Cafe', 37.483053, -122.225456,
	"A cozy Victorian house with a patio & garden is the setting for American breakfast & lunch fare."],
  ['Vesta', 37.485737, -122.226158, 
	"Buzzy indoor-outdoor venue draws crowds with creative, wood-fired pizza, small plates, wine & beer."]
];

var infowindow = new google.maps.InfoWindow({ 
	maxWidth: 500
  });

  function addMarker(sites, timeout) {
	var pos = new google.maps.LatLng(sites [1], sites[2]);
	window.setTimeout(function() {
		var marker = new google.maps.Marker({
		  position: pos,
		  map: map,
		  title: sites[0],
		  animation: google.maps.Animation.DROP
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent('<div><b>' + sites[0] + 
				'</b><br><br>' + sites[3] + '</div>'); 
			infowindow.open(map,this);
			});
  }, timeout);
}

google.maps.event.addDomListener(window, 'load', initialize);