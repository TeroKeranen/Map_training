const helsinki = { lat: 60.211, lng: 24.8385103 };

// Marker
function marker(position) {
  new google.maps.Marker({
    position: position,
    map: map,
  });
}

// show map
function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: helsinki,
    zoom: 8,
  });

  marker(helsinki);
}
