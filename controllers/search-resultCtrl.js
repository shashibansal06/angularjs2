angular.module("app").controller("searchResultCtrl", function ($scope, $state, $rootScope, $window) {
    $scope.searchinfo = [
        { 
          "Name" : "Jack Franklin ",
          "title" : "Architect",          
        },
        {
          "Name" : "Johnes Smith",
          "title" : "Architect",          
        },
        {
          "Name" : "Walker Paul",
          "title" : "Architect",          
        }, 
        {
          "Name" : "Walker Paul 3",
          "title" : "Architect",          
        },
        { 
          "Name" : "Jack Franklin ",
          "title" : "Architect",          
        },
        {
          "Name" : "Johnes Smith",
          "title" : "Architect",          
        },
        {
          "Name" : "Walker Paul",
          "title" : "Architect",          
        }, 
        {
          "Name" : "Walker Paul 3",
          "title" : "Architect",          
        },
        {
          "Name" : "Walker Paul 4",
          "title" : "Architect",          
        }
    ] 
    $scope.delete_row = function(index){
      $scope.bloginfo.splice(index,1);
    }
});



