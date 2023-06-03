// Get user location and display on the page:
function getUserLocation() {
    const userLocation = document.getElementById("userLocation");

    navigator.geolocation.getCurrentPosition(position => {
        if (navigator.geolocation) {
            userLocation.innerHTML =
                `<br>Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude};`
        }
        else {
            alert("Cant display your location");
        }
    })
}