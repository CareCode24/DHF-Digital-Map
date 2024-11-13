function initMap() {
    // Define map options and set the initial center point
    var mapCenter = { lat: -36.8605472, lng: 174.6361861 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: mapCenter
    });

    // Define arrays to hold markers for each floor
    var groundFloorMarkers = [];
    var secondFloorMarkers = [];

    // Data for ground floor features (example with converted coordinates)
    var groundFloorData = [
        { title: "Arena Stage", position: { lat: -36.8597583, lng: 174.6362528 } },
        { title: "Arena Bar", position: { lat: -36.8605472, lng: 174.6361861 } },
        { title: "Arena Water Station 1", position: { lat: -36.8604111, lng: 174.6363028 } },
        // Add the rest of your ground floor data here...
    ];

    // Data for second floor features (example with converted coordinates)
    var secondFloorData = [
        { title: "The George Stage", position: { lat: -36.8607556, lng: 174.6363056 } },
        { title: "VIP", position: { lat: -36.8606472, lng: 174.6362694 } },
        { title: "Second Floor Bar", position: { lat: -36.86065, lng: 174.6363861 } },
        // Add the rest of your second floor data here...
    ];

    // Create markers for the ground floor and store them in the array
    groundFloorData.forEach(function(feature) {
var marker = new google.maps.Marker({
    position: feature.position,
    map: map,
    title: feature.title,
    icon: 'https://path/to/custom_icon.png' //https://drive.google.com/file/d/1Q9KWTlH4R9aR9TtSOOUjXbLgnTboUR4O/view?usp=sharingL
});


    // Create markers for the second floor and store them in the array (initially hidden)
    secondFloorData.forEach(function(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            map: null,  // Start with the markers hidden
            title: feature.title
        });
        secondFloorMarkers.push(marker);
    });

    // Add buttons to toggle between ground and second floor
    document.getElementById('toggleGroundFloor').addEventListener('click', function() {
        setMapOnAll(groundFloorMarkers, map);
        setMapOnAll(secondFloorMarkers, null);
    });

    document.getElementById('toggleSecondFloor').addEventListener('click', function() {
        setMapOnAll(groundFloorMarkers, null);
        setMapOnAll(secondFloorMarkers, map);
    });

    // Function to set markers on the map
    function setMapOnAll(markers, map) {
        markers.forEach(function(marker) {
            marker.setMap(map);
        });
    }
}
