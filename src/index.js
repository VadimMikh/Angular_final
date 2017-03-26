import angular from 'angular';

import {Main} from './app/components/weather/main.component';
import {CityInput} from './app/components/weather/input.component';
import {CityList} from './app/components/weather/citylist.component';
import {Profiles} from './app/components/weather/profiles.component';
import decimalFilter from './app/components/weather/decimal.filter';
import {WetherService} from './app/components/weather';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';
import './app/components/weather/weather.scss';

export const app = 'main';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('main', Main)
  .component('cityInput', CityInput)
  .component('cityList', CityList)
  .component('profiles', Profiles)
  .filter('decimal', () => decimalFilter)
  .service('wetherService', WetherService);
