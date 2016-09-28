(function (){
  app.controller("IndexController",function($scope, $http) {
    $scope.placeholder = "Search Photos";
    $scope.filter = "Search by Date Taken ";
    $scope.sort = "Sort by :";
    $scope.minDateSearch = "From  YYYY-MM-DD";
    $scope.maxDateSearch = "To  YYYY-MM-DD";
    $scope.footerMsg = "All rights reserved.";
    var returnedObj;
    $scope.searchImg = function(param) {
      if ($scope.param === undefined) {
        return;
      } else {
        $scope.showAllPhotos = true;
        var searchUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&tags="+$scope.param+"&api_key=9d81b59baba99f4f81947a17edc88751&jsoncallback=JSON_CALLBACK";
        $http.jsonp(searchUrl).then(function(response) {
          $scope.returnedPhotos = response.data.photos.photo;
          returnedObj = response.data.photos.photo;
        }).catch(function(error) {
          console.log(error);
        });
      }
    };
    $scope.filterByDate = function(minDate, maxDate) {
      $scope.minDate = minDate;
      $scope.maxDate = maxDate;
      var filterUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&tags=all&min_taken_date="+$scope.minDate+"&max_taken_date="+$scope.maxDate+"&api_key=9d81b59baba99f4f81947a17edc88751&jsoncallback=JSON_CALLBACK";
      $http.jsonp(filterUrl).then(function(response) {
        $scope.returnedPhotos = response.data.photos.photo;
        returnedObj = response.data.photos.photo;
      });
    };
    $scope.previewImg = function($event) {
      $scope.showModal = true;
      var selectedImg = $event.currentTarget.id;
      for (var i = 0; i < returnedObj.length; i++) {
        if (selectedImg === returnedObj[i].id) {
          $scope.selectedPhotoId = returnedObj[i].id;
          $scope.selectedPhotoSecret = returnedObj[i].secret;
          $scope.selectedPhotoFarm = returnedObj[i].farm;
          $scope.selectedPhotoServer = returnedObj[i].server;
        }
      }
    };
    $scope.closeImage = function() {
      $scope.showModal = false;
    };
  });
}());
