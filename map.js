function initMap() {
    var festivalLocation = { lat: -36.8485, lng: 174.7633 }; // Coordinates for Auckland, NZ

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: festivalLocation
    });

    var marker = new google.maps.Marker({
        position: festivalLocation,
        map: map,
        title: 'Deep Hard N\' Funky Main Stage'
    });
}
