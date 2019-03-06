class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.maxTemp = document.getElementById('w-max-temp');
    this.wind = document.getElementById('w-wind');
    this.pressure = document.getElementById('w-pressure');
    this.clouds = document.getElementById('w-clouds');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp + "℃";
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.maxTemp.textContent = `Max Temperature: ${weather.main.temp_max}℃`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}
    km/h`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} mb`;
    this.clouds.textContent = `Cloud Cover: ${weather.clouds.all}%`;
  }
}