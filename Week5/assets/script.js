function changeCity(city) {
    var cityNameElement = document.getElementById('city-name');
    var tempColorElement = document.getElementById('temp-color');
    var photoGalleryElements = document.getElementsByClassName('photo-gallery');

    cityNameElement.innerHTML = '<strong>' + city + '</strong>';

    if (city === 'chandler') {

        cityNameElement.innerHTML = '<strong>Chandler🌵☀️</strong>';


        tempColorElement.innerHTML = '95 F | 35 C';
    } else if (city === 'portland') {

        cityNameElement.innerHTML = '<strong>Portland🌧️🌲</strong>';


        tempColorElement.innerHTML = '72 F | 22 C';
    } else if (city === 'seattle') {

        cityNameElement.innerHTML = '<strong>Seattle🌦️🌲</strong>';

        tempColorElement.innerHTML = '85 F | 29 C';
    } else if (city === 'saltlake') {

        cityNameElement.innerHTML = '<strong>Salt Lake🏞️🏔️</strong>';

        tempColorElement.innerHTML = '78 F | 26 C';
    } else if (city === 'victor') {

        cityNameElement.innerHTML = '<strong>Victor🏔️❄️</strong>';

        tempColorElement.innerHTML = '68 F | 20 C';
    }


    for (var i = 0; i < photoGalleryElements.length; i++) {
        photoGalleryElements[i].src = 'images/' + city + '-' + (i + 1) + '.jpg';
    }
}
