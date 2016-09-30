(function (){
  app.controller("IndexController",function($scope, httpCall) {
    $scope.placeholder = "Search Photos";
    $scope.filter = "Search by Date Taken ";
    $scope.sort = "Sort by :";
    $scope.minDateSearch = "From  YYYY-MM-DD";
    $scope.maxDateSearch = "To  YYYY-MM-DD";
    $scope.footerMsg = "All rights reserved.";
    $scope.preview = "Click to Preview";
    var returnedObj, url, modalImg, modalImgId;
    function appendData(id, secret, farm, server, title) {
      $scope.selectedPhotoId = id;
      $scope.selectedPhotoSecret = secret;
      $scope.selectedPhotoFarm = farm;
      $scope.selectedPhotoServer = server;
      $scope.selectedPhotoTitle = title;
    }
    $scope.getElementInModal = function () {
      modalImg = document.getElementsByClassName("modalPhoto");
      modalImgId = modalImg[0].id;
    };
    $scope.searchImg = function(param) {
      if ($scope.param === undefined) {
        return;
      } else {
        $scope.showAllPhotos = true;
        url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&tags="+$scope.param+"&api_key=9d81b59baba99f4f81947a17edc88751&jsoncallback=JSON_CALLBACK";
        httpCall.getDataQuery(url).then(function(response) {
          $scope.returnedPhotos = response.photos.photo;
          returnedObj = response.photos.photo;
        });
      }
    };
    $scope.filterByDate = function(minDate, maxDate) {
      $scope.minDate = minDate;
      $scope.maxDate = maxDate;
      url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&tags=all&min_taken_date="+$scope.minDate+"&max_taken_date="+$scope.maxDate+"&api_key=9d81b59baba99f4f81947a17edc88751&jsoncallback=JSON_CALLBACK";
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
          appendData(returnedObj[i].id, returnedObj[i].secret, returnedObj[i]
            .farm,returnedObj[i].server, returnedObj[i].title);
        }
      }
    };
    $scope.displayPrevImg = function() {
      $scope.getElementInModal();
      for (var i = 0; i < returnedObj.length; i++) {
        if (modalImgId === returnedObj[i].id) {
          if (returnedObj[i-1] === undefined) {
            $scope.hidePrevGlyph = true;
            return;
          } else {
            $scope.hideNextGlyph = false;
            appendData(returnedObj[i-1].id, returnedObj[i-1].secret,
              returnedObj[i-1].farm,returnedObj[i-1].server);
          }
        }
      }
    };
    $scope.displayNextImg = function() {
      $scope.getElementInModal();
      for (var i = 0; i < returnedObj.length; i++) {
        if (modalImgId === returnedObj[i].id) {
          if (returnedObj[i+1] === undefined) {
            $scope.hideNextGlyph = true;
            return;
          } else {
            $scope.hidePrevGlyph = false;
            appendData(returnedObj[i+1].id, returnedObj[i+1].secret,
              returnedObj[i+1].farm,returnedObj[i+1].server);
          }
        }
      }
    };
    $scope.closeImage = function() {
      $scope.hideNextGlyph = false;
      $scope.hidePrevGlyph = false;
      $scope.showModal = false;
    };
  });
}());
