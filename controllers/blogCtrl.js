angular.module("app").controller("blogCtrl", function ($scope, $state, $rootScope, $window) {
    $scope.bloginfo = [
        { 
          "Name" : "Blog Post Title",
          "description" : "Lorem Ipsum is simply dummy text of the eri noting and typesetting industry. Lorm Ipsums has been the industry's standard...",
          "date" : "25 June 2018"         
        },
        {
          "Name" : "Blog Post Title2",
          "description" : "Lorem Ipsum is simply dummy text of the eri noting and typesetting industry. Lorm Ipsums has been the industry's standard...",
          "date" : "26 June 2018"        
        },
        {
          "Name" : "Blog Post Title3",
          "description" : "Lorem Ipsum is simply dummy text of the eri noting and typesetting industry. Lorm Ipsums has been the industry's standard...",
          "date" : "27 June 2018"        
        }, 
        {
          "Name" : "Blog Post Title4",
          "description" : "Lorem Ipsum is simply dummy text of the eri noting and typesetting industry. Lorm Ipsums has been the industry's standard...",
          "date" : "28 June 2018"        
        }
    ] 
    $scope.delete_row = function(index){
      $scope.bloginfo.splice(index,1);
    }
});



