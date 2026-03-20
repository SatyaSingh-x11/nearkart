const locationText = document.getElementById("location-text");

function detectLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        locationText.textContent = "📍 Nearby Area";
      },
      () => {
        locationText.textContent = "📍 Enable Location";
      }
    );
  }
}

detectLocation();
