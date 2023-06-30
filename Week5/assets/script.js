const apiKey = '777301324736b324772146a3082370af';

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

function updateWeatherInformation(city) {
  fetchWeatherData(city)
    .then((data) => {
      if (data) {
        const cityNameElement = document.getElementById('city-name');
        const temperatureElement = document.getElementById('temp-color');
        const weatherDescriptionElement = document.getElementById('weather-description');
        const weatherImageElement = document.getElementById('weather-image');
        const photoGalleryElements = document.getElementsByClassName('photo-gallery');
        const cityFactsElement = document.querySelector('.city-facts');

        let cityDisplayName = '';
        let weatherIcon = '';
        let citySpecificContent = '';

        if (city === 'chandler') {
          cityDisplayName = 'Chandler🌵☀️';
          weatherIcon = '01d';
          citySpecificContent = "Chandler is a suburb of Phoenix, Arizona with a population of 272,439. It's located in Maricopa and Pinal counties. Chandler is considered one of the best places to live in Arizona. Chandler has a dry climate, beautiful desert mountains, and year-round sunshine. It also has excellent schools, world-class golf courses, more than 60 parks, and affordable housing. The average cost of living in Chandler is $2595, which is in the top 1% of the most expensive cities in the world. Chandler's housing expenses are 66% higher than the national average, and utility prices are 3% higher than the national average. Transportation expenses like bus fares and gas prices are 7% higher than the national average. Grocery prices are 0% lower than the national average. Chandler is 8.4% more expensive than Mesa, 4.5% more expensive than Tempe, 8.4% more costly than Tucson, and 6.4% more expensive than Phoenix.";
          const cityFactsElement = document.querySelector('.city-facts');
          cityFactsElement.innerHTML = citySpecificContent;
        } else if (city === 'portland') {
          cityDisplayName = 'Portland🌧️🌲';
          weatherIcon = '09d';
          citySpecificContent = "Portland is a city in the Pacific Northwest of the United States. It's the largest city in Oregon and the 28th largest city in the United States. Portland is known for being a sustainability-minded, bike-friendly city with easy access to nature. It's also known for its art, theater, music, and outdoor appreciation. Portland is located in Clackamas County, Multnomah County, and Washington County. Some of the best neighborhoods to live in Portland include: Arlington Heights, Sellwood Moreland, The Pearl District, Northwest District, South Waterfront. Portland's housing expenses are 62% higher than the national average, but utility prices are 8% lower. Transportation expenses like bus fares and gas prices are 22% higher than the national average.";
          const cityFactsElement = document.querySelector('.city-facts');
          cityFactsElement.innerHTML = citySpecificContent;
        } else if (city === 'seattle') {
          cityDisplayName = 'Seattle🌦️🌲';
          weatherIcon = '10d';
          citySpecificContent = "Seattle is a city on the West Coast of the United States. It is the largest city in the Pacific Northwest and one of the largest and most affluent urban centers in the United States. Seattle is known for its lush greenery, iconic landmarks, and delicious food, beer, and wine. It is also known as the Emerald City because of its famous evergreen forests. Seattle is the hub for the Greater Puget Sound region. It is home to iconic landmarks like the Space Needle and Pike Place Market. Seattle is also known as the coffee capital and the origin of grunge music. Seattle is 175 feet above sea level. It is the only major city named after a Native chief. The name Seattle comes from Chief Si'ahl, who was the leader of both the Suquamish and Duwamish people.";
          const cityFactsElement = document.querySelector('.city-facts');
          cityFactsElement.innerHTML = citySpecificContent;
        } else if (city === 'cheyenne') {
          cityDisplayName = 'Cheyenne🌞🏔️';
          weatherIcon = '13d';
          citySpecificContent = "Cheyenne is the capital and most populous city of Wyoming, with 65,132 residents as of 2020. It's located in the southeastern corner of the state on Crow Creek, 49 miles (79 km) east of Laramie city. Cheyenne is known for its Old West feel and cowboy culture. It's considered the nation's rodeo and railroad capital. The city is home to a variety of museums, historic hotels and mansions, a collection of steam engines, western-themed attractions and shopping, and resorts and ranches. Cheyenne has a high crime rate, with 3,500 crimes per 100,000 residents last year. The number of violent crimes is lower than around the US, but property crimes happen more often.";
          const cityFactsElement = document.querySelector('.city-facts');
          cityFactsElement.innerHTML = citySpecificContent;
        } else if (city === 'victor') {
          cityDisplayName = 'Victor🏔️❄️';
          weatherIcon = '50d'; 
          citySpecificContent = "Victor is a city in Teton County, Idaho. It's the largest city in the county, and the 61st largest city in Idaho. The population was 2,157 in 2020, up from 1,928 in 2010. Victor is part of the Jackson, WY–ID Micropolitan Statistical Area. It's located at an elevation of over 6,000 feet. Victor has a suburban feel, and most residents own their homes. Many families and young professionals live in Victor, and residents tend to lean conservative. Victor has a wide range of year-round recreational activities, including skiing, fishing, and the Music on Main outdoor concert series. There are also several quaint coffee shops, saloons, and very western-looking restaurants.";

          const cityFactsElement = document.querySelector('.city-facts');
          cityFactsElement.innerHTML = citySpecificContent;
        }


        cityNameElement.innerHTML = `<strong>${cityDisplayName}</strong>`;

        if (data.main && data.main.temp) {
          const tempCelsius = Math.round(data.main.temp);
          const tempFahrenheit = Math.round((tempCelsius * 9) / 5 + 32);

          temperatureElement.innerHTML = `${tempCelsius}°C | ${tempFahrenheit}°F`;
        } else {
          temperatureElement.innerHTML = 'N/A';
        }

        if (data.main && data.main.humidity) {
            const humidityElement = document.getElementById('humidity');
            humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
          } else {
            const humidityElement = document.getElementById('humidity');
            humidityElement.textContent = 'Humidity: N/A';
          }
          if (data && data.wind && data.wind.speed) {
            const windSpeedElement = document.getElementById('wind-speed');
            windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
          } else {
            const windSpeedElement = document.getElementById('wind-speed');
            windSpeedElement.textContent = 'Wind Speed: N/A';
          }
                    

        if (data.weather && data.weather.length > 0 && data.weather[0].description) {
          const description = data.weather[0].description;
          const formattedDescription = description.charAt(0).toUpperCase() + description.slice(1).toLowerCase();
          weatherDescriptionElement.textContent = formattedDescription;
        } else {
          weatherDescriptionElement.textContent = 'Weather information unavailable';
        }

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

function getWeatherImageURL(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}.png`;
}
function changeVideo(city) {
    const videoElement = document.querySelector('.change-video iframe');
  
    if (city === 'chandler') {
      videoElement.src = 'https://www.youtube.com/embed/swe9wBBs34A';
    } else if (city === 'portland') {
      videoElement.src = 'https://www.youtube.com/embed/fU1AUy8dASc';
    } else if (city === 'seattle') {
      videoElement.src = 'https://www.youtube.com/embed/lcEqZ-Uxi5I';
    } else if (city === 'cheyenne') {
      videoElement.src = 'https://www.youtube.com/embed/kYXXn3CjwAQ';
    } else if (city === 'victor') {
      videoElement.src = 'https://www.youtube.com/embed/4Jp5u5DiWvM';
    }
  }

  changeVideo(selectedCity);

  function changeImage(city) {
    var firstImage = document.getElementById('firstImage');
    var secondImage = document.getElementById('secondImage');
    var thirdImage = document.getElementById('thirdImage');
    var fourthImage = document.getElementById('fourthImage');
  
    if (city === 'chandler') {
      firstImage.src = 'images/chandler-1.jpg';
      secondImage.src = 'images/chandler-2.jpg';
      thirdImage.src = 'images/chandler-3.jpg';
      fourthImage.src = 'images/chandler-4.jpg';
    } else if (city === 'portland') {
      firstImage.src = 'images/portland-1.jpg';
      secondImage.src = 'images/portland-2.jpg';
      thirdImage.src = 'images/portland-3.jpg';
      fourthImage.src = 'images/portland-4.jpg';
    } else if (city === 'seattle') {
      firstImage.src = 'images/seattle-1.jpg';
      secondImage.src = 'images/seattle-2.jpg';
      thirdImage.src = 'images/seattle-3.jpg';
      fourthImage.src = 'images/seattle-4.jpg';
    } else if (city === 'cheyenne') {
      firstImage.src = 'images/cheyenne.jpg';
      secondImage.src = 'images/cheyenne2.jpg';
      thirdImage.src = 'images/cheyenne3.jpg';
      fourthImage.src = 'images/cheyenne4.jpg';
    } else if (city === 'victor') {
      firstImage.src = 'images/victor-1.jpg';
      secondImage.src = 'images/victor-2.jpg';
      thirdImage.src = 'images/victor-3.jpeg';
      fourthImage.src = 'images/victor-4.jpeg';
    }
  
  }
  
  function changeCity(city) {
    if (city === 'chandler') {
      updateWeatherInformation('chandler');
      changeImage('chandler'); // Add this line
    } else if (city === 'portland') {
      updateWeatherInformation('portland');
      changeImage('portland'); // Add this line
    } else if (city === 'seattle') {
      updateWeatherInformation('seattle');
      changeImage('seattle'); // Add this line
    } else if (city === 'cheyenne') {
      updateWeatherInformation('cheyenne');
      changeImage('cheyenne'); // Add this line
    } else if (city === 'victor') {
      updateWeatherInformation('victor');
      changeImage('victor'); // Add this line
    }
  }
  
  const cityDropdown = document.getElementById('city-dropdown');
  cityDropdown.addEventListener('change', (event) => {
    const selectedCity = event.target.value;
    changeCity(selectedCity);
  });