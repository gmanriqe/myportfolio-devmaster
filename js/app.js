/*
* https://www.google.com/maps
*/
function mapGoogle() {
// latitud y longuitud
var coordenada = {
    lat: -11.1212614, 
    lng: -77.597215
};

// del objeto google.maps. accedemos a tu método Map()
var mapa = new google.maps.Map(
    document.getElementById("map"),
    {
        zoom: 15,
        center: coordenada,
        styles: [
{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
{
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
},
{
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
},
{
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}]
},
{
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}]
},
{
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}]
},
{
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}]
},
{
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}]
},
{
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}]
},
{
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}]
},
{
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
},
{
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}]
},
{
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
},
{
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}]
},
{
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}]
},
{
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}]
}
]
    }
);

// marcador google
var clip = new google.maps.Marker({
    position: coordenada, 
    map: mapa
});
}