// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.config( function($httpProvider){
  $httpProvider.defaults.useXDomain=true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('loginController',function($scope,$http){
  $scope.login=function(){
  
                   $http({
                         method : "POST",
                        url : "http://trackmateproject.herokuapp.com/api-token-auth/",
                        data : {"userId" : $scope.username, "groupId" : $scope.groupId, "password" : $scope.password},
                        headers : {
                            "Content-Type" : "application/json"
                        }
                    }).then(function successCallback(response) {

                        alert("sucess");
                    }, function errorCallback(response) {
                        
                        if (response.status == 400) {
                            alert("sdfasdfasf"+response.data.error)
                            
                        } else {
                           
                           alert("Error trying to login. Retry.");
                            
                        }
                    });

     }
})