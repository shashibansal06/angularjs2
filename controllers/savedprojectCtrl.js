angular.module("app").controller("savedprojectCtrl", function ($scope, $state, $rootScope, $window) { 
    $scope.savedprojectinfo = [
        {
          "projectname" : "Fix a hole in the wall", 
          "date" : "20 June 2016",
          "status" : "Closed",
          "skill" : "Interior Designer",
          "startDate" : "20 June 2016",
          "EndDate" : "25 June 2016"
        },
        {
          "projectname" : "Fix a hole in the wall", 
          "date" : "20 June 2016",
          "status" : "Bid Submitted",
          "skill" : "Interior Designer3",
          "startDate" : "20 June 2016",
          "EndDate" : "25 June 2016"
        },
        {
          "projectname" : "Fix a hole in the wall", 
          "date" : "20 June 2016",
          "status" : "Closed",
          "skill" : "Interior Designer",
          "startDate" : "20 June 2016",
          "EndDate" : "25 June 2016"
        },
        {
          "projectname" : "Fix a hole in the wall", 
          "date" : "20 June 2016",
          "status" : "Bid Submitted",
          "skill" : "Interior Designer3",
          "startDate" : "20 June 2016",
          "EndDate" : "25 June 2016"
        }
    ] 
    $scope.delete_saveproject=function(index){
      $scope.savedprojectinfo.splice(index,1);
    }
});



