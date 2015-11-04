angular.module('padChal')

.config([
  'uiGmapGoogleMapApiProvider',
  function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyByRkMjgiVyXcdoHKOBeAzoYPbSY5_hP2E',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
}]);