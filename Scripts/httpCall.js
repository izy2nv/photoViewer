(function() {
  var httpCall = function($http) {
    var getPhotos = function(url) {
      return $http.jsonp(url).then(function(response) {
        return response.data;
      }).catch(function(error) {
        console.log(error);
      });
    };
    return {
      getDataQuery : getPhotos
    };
  };
  var module = angular.module("app");
  module.factory("httpCall", httpCall); //this registers the httpCall custom service with the app module.
}());
