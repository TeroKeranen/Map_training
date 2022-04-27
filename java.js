// Lista kaupungeista object muodossa
const lista = {
  helsinki: { lat: 60.211, lng: 24.8385103 },
  kuopio: { lat: 62.9973437, lng: 27.1134636 },
};

// Functio jolla näkyy kartta
function initMap() {
  const myLatLng = { lat: 60.211, lng: 24.8385103 };
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: myLatLng,
    zoom: 5,
  });

  // Apufunction jolla merkitään karttaan kaupunkeja joita listassa lyötyy
  function markIt(city) {
    let kaupunki = lista[city];
    new google.maps.Marker({
      position: kaupunki,
      map: map,
    });
  }

  markIt("kuopio");
  markIt("helsinki");
}
