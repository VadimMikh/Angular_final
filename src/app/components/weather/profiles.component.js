class ProfilesController {
  constructor($log, $scope) {
    'ngInject';

    this.$log = $log;
    this.$scope = $scope;
  }

  handleAddProfile(val) {
    this.addProfile({val});
  }

  handleSwitchProfile(name) {
    this.switchProfile({name});
  }

  handleRemoveProfile(ind) {
    this.removeProfile({ind});
  }
}

export const Profiles = {
  template: require('./profiles.html'),
  controller: ProfilesController,
  bindings: {
    profiles: '<',
    newProfile: '=',
    addProfile: '&',
    switchProfile: '&',
    removeProfile: '&'
  }
};
