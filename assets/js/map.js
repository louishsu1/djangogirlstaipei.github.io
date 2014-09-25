function initialize() {
  geocoder  = new google.maps.Geocoder();

  var defaultLatLng    = new google.maps.LatLng(-34.397, 150.644),
      address          = document.getElementById('location-content').innerHTML,
      mapOptions = {
        zoom: 14,
        center: defaultLatLng
      };

  geocoder.geocode({'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      mapOptions.center=results[0].geometry.location;
    } else {
      // alert('Geocode was not successful for the following reason: ' + status);
    }

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: mapOptions.center
    });
  });
}

google.maps.event.addDomListener(window, 'load', initialize);