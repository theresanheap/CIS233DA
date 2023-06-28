function changeCity(city) {
    // Get the city name element
    var cityNameElement = document.getElementById('city-name');

    // Get the temperature color element
    var tempColorElement = document.getElementById('temp-color');

    // Get the photo gallery elements
    var photoGalleryElements = document.getElementsByClassName('photo-gallery');

    // Reset CSS classes and content
    cityNameElement.innerHTML = '';
    tempColorElement.innerHTML = '';

    for (var i = 0; i < photoGalleryElements.length; i++) {
        photoGalleryElements[i].src = '';
        photoGalleryElements[i].alt = '';
    }

    // Apply changes based on the city
    if (city === 'chandler') {
        // Update city name
        cityNameElement.innerHTML = '<strong>Chandler🌵☀️</strong>';

        // Update temperature color
        tempColorElement.innerHTML = '95 F | 35 C';
    } else if (city === 'portland') {
        // Update city name
        cityNameElement.innerHTML = '<strong>Portland🌧️🌲</strong>';

        // Update temperature color
        tempColorElement.innerHTML = '72 F | 22 C';
    } else if (city === 'seattle') {
        // Update city name
        cityNameElement.innerHTML = '<strong>Seattle🌦️🌲</strong>';

        // Update temperature color
        tempColorElement.innerHTML = '85 F | 29 C';
    } else if (city === 'saltlake') {
        // Update city name
        cityNameElement.innerHTML = '<strong>Salt Lake🏞️🏔️</strong>';

        // Update temperature color
        tempColorElement.innerHTML = '78 F | 26 C';
    } else if (city === 'victor') {
        // Update city name
        cityNameElement.innerHTML = '<strong>Victor🏔️❄️</strong>';

        // Update temperature color
        tempColorElement.innerHTML = '68 F | 20 C';
    }

    // Update photo gallery based on the city
    for (var i = 0; i < photoGalleryElements.length; i++) {
        photoGalleryElements[i].src = 'images/' + city + '-' + (i + 1) + '.jpg';
        photoGalleryElements[i].alt = city;
    }
}
