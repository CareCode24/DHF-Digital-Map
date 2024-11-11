function initMap() {

    var festivalLocation = {  lat: -36.8605472, lng: 174.6352472  };

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
