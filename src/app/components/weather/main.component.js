class MainController {
  /** @ngInject */
  constructor($log, wetherService) {
    this.wetherService = wetherService;
    this.city = '';
    this.$log = $log;
    this.citylist = [];
    this.newProfile = '';
    this.activeProfile = 'Default';
    this.profiles = [
      {
        name: 'Default',
        weather: {},
        profileCities: [],
        active: true
      }
    ];
  }

  getWether(city) {
    this.wetherService.getWeather(city).then(respond => {
      if (respond.status === 200) {
        this.profiles.map(el => {
          if (el.name === this.activeProfile) {
            this.$log.info(this.activeProfile);
            const wetherItem = respond.data;
            wetherItem.more = false;
            el.weather = wetherItem;
            el.profileCities.push(wetherItem);
            this.citylist = el.profileCities;
          }
          return this.profiles;
        });
      }
    });
    this.$log.info(this.profiles);
    this.city = '';
  }

  removeCity(ind) {
    this.$log.info(ind);
    this.profiles.map(el => {
      if (el.name === this.activeProfile) {
        el.profileCities.splice(ind, 1);
      }
      return this.profiles;
    });
  }

  showMore(ind) {
    this.$log.info(ind);
    this.profiles.map(el => {
      if (el.name === this.activeProfile) {
        this.$log.info(el.profileCities[ind].city.name);
        el.profileCities[ind].more = !el.profileCities[ind].more;
      }
      return this.profiles;
    });
  }

  addProfile(val) {
    let notExist = false;
    this.profiles.map(el => {
      el.active = false;
      if (el.name === val) {
        this.$log.info('Profile allready exist!');
        notExist = false;
      } else {
        notExist = true;
      }
      return notExist;
    });
    if (notExist) {
      const newProfileObj = {
        name: val,
        weather: {},
        profileCities: [],
        active: true
      };
      this.profiles.push(newProfileObj);
      this.activeProfile = val;
      this.citylist = [];
      this.$log.info(this.profiles);
      this.newProfile = '';
    }
  }

  removeProfile(ind) {
    this.profiles.splice(ind, 1);
    this.citylist = [];
  }

  switchProfile(name) {
    this.activeProfile = name;
    this.$log.info(name);
    this.profiles.map(el => {
      el.active = false;
      if (el.name === this.activeProfile) {
        this.$log.info(el.profileCities);
        this.citylist = el.profileCities;
        el.active = true;
      }
      return this.citylist;
    });
  }

}

export const Main = {
  template: require('./main.html'),
  controller: MainController,
  bindings: {}
};
