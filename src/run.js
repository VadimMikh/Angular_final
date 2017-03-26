export default run;

/** @ngInject */
function run($log, $http) {
  let responseData;

  $http.get('http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=c29c71500066b150d1e21836c7f97c7d')
  .then(response => {
    responseData = response.data;
    $log.info(responseData);
  })
  .catch(error => {
    $log.info(error);
  });

  $log.info('runblock end');
}
