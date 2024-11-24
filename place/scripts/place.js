function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


// Getting the current date
const currentDate = new Date();

// Inserting the formatted date into the HTML element with the id "current-date"
document.getElementById('current-date').textContent = formatDate(currentDate);


const updateLastModifiedDate = () => {
    const footer = document.querySelector('.footer');
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    footer.innerHTML = footerContent;
  };
  
  const updateWeatherData = () => {
    const weatherData = {
      temperature: 26,
      conditions: 'Sunny',
      windSpeed: 10,
      windChill: 25.8,
    };
  
    const weatherSection = document.querySelector('.weather-data');
    weatherSection.innerHTML = `
      <p><strong>Temperature:</strong> ${weatherData.temperature}°C</p>
      <p><strong>Conditions:</strong> ${weatherData.conditions}</p>
      <p><strong>Wind:</strong> ${weatherData.windSpeed} km/h</p>
      <p><strong>Wind Chill:</strong> ${weatherData.windChill}°C</p>
    `;
  };
  
  const addImageHoverEffect = () => {
    const image = document.querySelector('.image-section img');
    image.addEventListener('mouseover', () => {
      image.style.filter = 'brightness(120%)';
      image.style.transition = 'filter 0.3s ease-in-out';
    });
    image.addEventListener('mouseout', () => {
      image.style.filter = 'brightness(100%)';
    });
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    updateLastModifiedDate();
    updateWeatherData();
    addImageHoverEffect();
  });
  