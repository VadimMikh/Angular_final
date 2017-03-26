class CityListController {
  constructor($log, $scope) {
    'ngInject';

    this.$log = $log;
    this.$scope = $scope;
  }
  handleCityRemove(ind) {
    this.cityRemove({ind});
  }

  handleShowMore(ind) {
    this.showMore({ind});
  }
}

export const CityList = {
  template: require('./citylist.html'),
  controller: CityListController,
  bindings: {
    cities: '<',
    cityRemove: '&',
    showMore: '&'
  }
};
