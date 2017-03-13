// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngStorage'])
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

.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    .state('login',{
      url:'/login',
      templateUrl:'pages/login.html',
      controller:'loginController'
    })
    .state('dashboard',{
      url:'/dashboard',
      templateUrl:'pages/dashboard.html',
      controller:'dashboardController'
    });
   
})


.controller('loginController',function($scope,$http,$state,$localStorage){
  $scope.login=function(){
  
                   // $http({
                   //       method : "POST",
                   //      url : "http://trackmateproject.herokuapp.com/api-token-auth/",
                   //      data : {"username" : $scope.username, "password" : $scope.password},
                   //      headers : {
                   //          "Content-Type" : "application/json"
                   //      }
                   //  }).then(function successCallback(response) {
                   //      $scope.username="";
                   //      $scope.password="";
                   //      alert("sucess");
                   //  }, function errorCallback(response) {
                        
                   //      if (response.status == 400) {
                   //          alert("sdfasdfasf"+response.data.error)
                            
                   //      } else {
                           
                   //         alert("Error trying to login. Retry.");
                            
                   //      }
                   //  });
                   $localStorage.currentuser=$scope.username;
                  $scope.username="";
                  $scope.password="";      
                  $state.go('dashboard');

     }
})
.controller('dashboardController',function($scope,$localStorage){

  alert("jkljhklhklh"+$localStorage.currentuser);
  $scope.refresh=function(){
    console.log("dsfksd;fjsd'afsdaf");
    alert("refresh");
  }
  $scope.message1=" This is a 'Facebook' styled Card. The header is created from a Thumbnail List item,\
      the content is from a card-body consisting of an image and paragraph text. The footer\
      consists of tabs, icons aligned left, within the card-footer.";
  $scope.message2="sjfgjdfdfjdgdfjdjdjdfj.\
  zxcvzxcvzxcvxzcccccccccccccccccccccccc\
  zxcvzxcvzxcvxzcvzxcvxzcvxczvxczvxczv";

$scope.arr=[
 {post:"ewtgy;kljh';jkhpoy0trjhbpdfjbp['tjhwrphjbrp[hjrtp[hjt [prjb[r0uip0huj0[hjigb[jkf[0hutpjhb[pih9thkjp'hb",postedOn:"18:18:27:251 Thu, 9 Mar 2017",userId:"kumawat.jitendra02@gmail.com"},
{post:"ewtgy;kljh';jkhpoy0trjhbpdfjbp['tjhwrphjbrp[hjrtp[hjt [prjb[r0uip0huj0[hjigb[jkf[0hutpjhb[pih9thkjp'hb",postedOn:"18:18:27:251 Thu, 9 Mar 2017",userId:"kumawat.jitendra02@gmail.com"},

{post:"ewtgy;kljh';jkhpoy0trjhbpdfjbp['tjhwrphjbrp[hjrtp[hjt [prjb[r0uip0huj0[hjigb[jkf[0hutpjhb[pih9thkjp'hb",postedOn:"18:18:27:251 Thu, 9 Mar 2017",userId:"kumawat.jitendra02@gmail.com"},

 {post:"ewtgy;kljh';jkhpoy0trjhbpdfjbp['tjhwrphjbrp[hjrtp[hjt [prjb[r0uip0huj0[hjigb[jkf[0hutpjhb[pih9thkjp'hb",postedOn:"18:18:27:251 Thu, 9 Mar 2017",userId:"kumawat.jitendra02@gmail.com"},

 {post:"ewtgy;kljh';jkhpoy0trjhbpdfjbp['tjhwrphjbrp[hjrtp[hjt [prjb[r0uip0huj0[hjigb[jkf[0hutpjhb[pih9thkjp'hb",postedOn:"18:18:27:251 Thu, 9 Mar 2017",userId:"kumawat.jitendra02@gmail.com"},

{post:"ewtgy;kljh';jkhpoy0trjhbpdfjbp['tjhwrphjbrp[hjrtp[hjt [prjb[r0uip0huj0[hjigb[jkf[0hutpjhb[pih9thkjp'hb",postedOn:"18:18:27:251 Thu, 9 Mar 2017",userId:"kumawat.jitendra02@gmail.com"},

{post:"ewtgy;kljh';jkhpoy0trjhbpdfjbp['tjhwrphjbrp[hjrtp[hjt [prjb[r0uip0huj0[hjigb[jkf[0hutpjhb[pih9thkjp'hb",postedOn:"18:18:27:251 Thu, 9 Mar 2017",userId:"kumawat.jitendra02@gmail.com"},

  {post:"ewtgy;kljh';jkhpoy0trjhbpdfjbp['tjhwrphjbrp[hjrtp[hjt [prjb[r0uip0huj0[hjigb[jkf[0hutpjhb[pih9thkjp'hb",postedOn:"18:18:27:251 Thu, 9 Mar 2017",userId:"kumawat.jitendra02@gmail.com"}

 ];







})
