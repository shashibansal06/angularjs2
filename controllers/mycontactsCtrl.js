angular.module("app").controller("mycontactCtrl", function ($scope, $state, $rootScope, $window) { 
    $scope.mycontacts = [
        {
          "Name" : "Jack Franklin", 
          "date" : "20 June 2016",
          "tradingName" : "Abc Organization Trading1",
          "businessType" : "Sole Trading 1" 
        },
        {
          "Name" : "Berglunds snabbköp",
          "date" : "25 June 2016",
          "tradingName" : "Abc Organization Trading2",
          "businessType" : "Sole Trading 2"
        },
        {
          "Name" : "Berglunds",
          "date" : "24 June 2016",
          "tradingName" : "Abc Organization Trading3",
          "businessType" : "Sole Trading 5"
        },
        {
          "Name" : "Centro comercial Moctezuma",
          "date" : "28 June 2016",
          "tradingName" : "Abc Organization Trading4",
          "businessType" : "Sole Trading 3"
        }
    ] 
    $scope.delete_mycontact = function(index){
      $scope.mycontacts.splice(index,1);
    }
});



