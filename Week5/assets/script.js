const apiKey = '777301324736b324772146a3082370af';

// Function to fetch weather data
async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching weather data:', error);
    return null;
  }
}

// Function to update weather information on the page
function updateWeatherInformation(city) {
  fetchWeatherData(city)
    .then((data) => {
      if (data) {
        const cityNameElement = document.getElementById('city-name');
        const temperatureElement = document.getElementById('temp-color');
        const weatherDescriptionElement = document.getElementById('weather-description');
        const weatherImageElement = document.getElementById('weather-image');
        const photoGalleryElements = document.getElementsByClassName('photo-gallery');

        let cityDisplayName = '';
        let weatherIcon = '';

        if (city === 'chandler') {
          cityDisplayName = 'Chandler🌵☀️';
          weatherIcon = '01d'; // Example weather icon code for clear sky
        } else if (city === 'portland') {
          cityDisplayName = 'Portland🌧️🌲';
          weatherIcon = '09d'; // Example weather icon code for shower rain
        } else if (city === 'seattle') {
          cityDisplayName = 'Seattle🌦️🌲';
          weatherIcon = '10d'; // Example weather icon code for rain
        } else if (city === 'saltlake') {
          cityDisplayName = 'Salt Lake🏞️🏔️';
          weatherIcon = '13d'; // Example weather icon code for snow
        } else if (city === 'victor') {
          cityDisplayName = 'Victor🏔️❄️';
          weatherIcon = '50d'; // Example weather icon code for mist
        }

        cityNameElement.innerHTML = `<strong>${cityDisplayName}</strong>`;
        temperatureElement.innerHTML = `${data.main.temp}°C`;
        weatherDescriptionElement.textContent = data.weather[0].description;
        weatherImageElement.setAttribute('src', getWeatherImageURL(weatherIcon));

        for (let i = 0; i < photoGalleryElements.length; i++) {
          photoGalleryElements[i].src = `images/${city}-${i + 1}.jpg`;
        }
      }
    })
    .catch((error) => {
      console.log('Error updating weather information:', error);
    });
}

// Function to get the URL for the weather condition image
function getWeatherImageURL(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}.png`;
}

function changeCity(city) {
    if (city === 'chandler') {
      updateWeatherInformation('chandler');
    } else if (city === 'portland') {
      updateWeatherInformation('portland');
    } else if (city === 'seattle') {
      updateWeatherInformation('seattle');
    } else if (city === 'saltlake') {
      updateWeatherInformation('saltlake');
    } else if (city === 'victor') {
      updateWeatherInformation('victor');
    }
  }
