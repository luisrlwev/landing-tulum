function initMap() {

    /* ### Mapa con las coordenadas ### */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 20.213510, lng: -87.454715 },
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        },
        streetViewControl: false
    });
    /* ### Fin Mapa con las coordenadas ### */

    /* ### Estilos del mapa ### */
    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ], { name: 'Colegio Inglés Tulum' });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    /* ### Fin Estilos del mapa ### */
    /* ### Íconos en el mapa ### */
    var icon = 'img/marcador.png';

    var contentColegio = '<div class="info-window">' +
        '<h3 class="color">Colegio Inglés Tulum</h3>' +
        '<div class="info-content">' +
        '<p class="text-dark">¡Encontraste el mejor Colegio de Tulum!</p>' +
        '<p>Calle Escorpión Sur entre calle Andrómeda Oriente y Calle Sol Oriente, Col. Huracanes, Tulum Centro.</p>'+
        '</div>' +
        '</div>';

    var infowindowColegio = new google.maps.InfoWindow({
        content: contentColegio
    });

    var marker = new google.maps.Marker({
        position: { lat: 20.212861, lng: -87.454500 },
        map: map,
        title: 'Colegio Inglés Tulum',
        icon: icon
    });

    marker.addListener('click', function() {
        infowindowColegio.open(map, marker);
    });
}