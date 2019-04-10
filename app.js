var pines = []

function agregarMarker (location) {
  var pin = new google.maps.Marker({
    position: location,
    map
  })

  console.log('Latitud: '+ location.lat())
  console.log('Longitud: '+ location.lng())

  for (var i in pines) {
    pines[i].setMap(null)  
  }

  pines.push(pin)
}

function cargar_mapa() {

  let latitude = 10.0316016
  let longitud = -67.4816653

  var options = {
    zoom: 15,
    center: new google.maps.LatLng(latitude, longitud),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  map = new google.maps.Map(document.getElementById('gmap_canvas'), options)

  map.addListener('click', (event) => {
    console.log(event)
    agregarMarker(event.latLng)
  })

  var pin = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitud),
    map,
    title: 'Hola Mundo'
  })

  pines.push(pin)
}