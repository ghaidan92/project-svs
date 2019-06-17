function initMap() {
    // The location of Uluru
    var uluru = {lat: 37.6889088, lng: -122.469409};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}