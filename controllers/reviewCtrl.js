angular.module("app").controller("reviewCtrl", function ($scope, $state, $rootScope, $window) { 
    $scope.comments = [
        {
          "name" : "Johnson Parker", 
          "date" : "20 June 2016",
          "discription" : "Good work having good experience and skills"
        },
        {
          "name" : "Berglunds snabbköp",
          "date" : "25 June 2016",
          "discription" : "Abc Organization Trading2"
        },
        {
          "name" : "Berglunds",
          "date" : "24 June 2016",
          "discription" : "Abc Organization Trading3"
        },
        {
          "name" : "Centro comercial Moctezuma",
          "date" : "28 June 2016",
          "discription" : "Abc Organization Trading4"
        }
    ] 
    $scope.number = [{label: 1}, {label: 2}, {label: 3}, {label: 4}, {label: 5}, {label: 6}, {label: 7}, {label: 8}];
    $scope.numberLoaded = true;
    $scope.numberUpdate = function(){
        $scope.numberLoaded = false; // disable slick
        //number update        
        $scope.numberLoaded = true; // enable slick
    };
    $scope.finishedProject = {
      enabled: true, 
      autoplay: false,
      draggable: true,  
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      slidesToShow: 2,
      method: {},
      responsive: [{  
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          } 
      }, 
      {  
        breakpoint: 300,
        settings: "unslick" // destroys slick
   
      }],
      event: {
          beforeChange: function (event, slick, currentSlide, nextSlide) {
          },
          afterChange: function (event, slick, currentSlide, nextSlide) {
          }
      }
  };

});



