class Weather {
  constructor(city, state) {
    this.apiKey = 'ea80f0e81ed6ea4fe8d68321e2bf73a9';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData; //or responseData.main?
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}