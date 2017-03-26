export class WetherService {
  constructor($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
  }

  getWeather(city) {
    // let responseData;

    return this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=c29c71500066b150d1e21836c7f97c7d');
      // .then(response => {
      //   responseData = response.data;
      //   // this.$log.info(responseData);
      //   return responseData;
      // })
      // .catch(error => {
      //   this.$log.info(error);
      // });
  }
}
