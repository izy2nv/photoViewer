(function (){
  app.controller("IndexController",function($scope, httpCall) {
    $scope.placeholder = "Search Photos";
    $scope.filter = "Search by Date Taken ";
    $scope.sort = "Sort by :";
    $scope.minDateSearch = "From  YYYY-MM-DD";
    $scope.maxDateSearch = "To  YYYY-MM-DD";
    $scope.footerMsg = "All rights reserved.";
    $scope.preview = "Click to Preview";
    var returnedObj;
    var url;
    $scope.searchImg = function(param) {
      if ($scope.param === undefined) {
        return;
      } else {
        $scope.showAllPhotos = true;
        url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&tags="+$scope.param+"&api_key=9d81b59baba99f4f81947a17edc88751&jsoncallback=JSON_CALLBACK";
        httpCall.getDataQuery(url).then(function(response){
          $scope.returnedPhotos = response.photos.photo;
          returnedObj = response.photos.photo;
        });
      }
    };
    $scope.filterByDate = function(minDate, maxDate) {
      $scope.minDate = minDate;
      $scope.maxDate = maxDate;
      var url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&tags=all&min_taken_date="+$scope.minDate+"&max_taken_date="+$scope.maxDate+"&api_key=9d81b59baba99f4f81947a17edc88751&jsoncallback=JSON_CALLBACK";
      httpCall.getDataQuery(url).then(function(response){
        $scope.returnedPhotos = response.photos.photo;
        returnedObj = response.photos.photo;
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
          $scope.selectedPhotoTitle = returnedObj[i].title;
        }
      }
    };
    $scope.closeImage = function() {
      $scope.showModal = false;
    };
  });
}());
