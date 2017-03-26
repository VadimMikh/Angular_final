class InputController {
  constructor($log, $scope) {
    'ngInject';

    this.$log = $log;
    this.$scope = $scope;
  }

  handleGetWeather(city) {
    this.getWeather({city});
  }
}

export const CityInput = {
  template: require('./input.html'),
  controller: InputController,
  bindings: {
    city: '=',
    getWeather: '&'
  }
};
