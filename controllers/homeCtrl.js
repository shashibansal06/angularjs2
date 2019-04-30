angular.module("app").controller("homeCtrl", function ($scope, $state, $rootScope, $window) {
	$scope.number = [{label: 1}, {label: 2}, {label: 3}, {label: 4}, {label: 5}, {label: 6}, {label: 7}, {label: 8}];
    $scope.numberLoaded = true;
    $scope.numberUpdate = function(){
        $scope.numberLoaded = false; // disable slick
        //number update        
        $scope.numberLoaded = true; // enable slick
    };
	$scope.slickConfig = {
	    enabled: true, 
	    autoplay: true,
	    draggable: true,  
	    autoplaySpeed: 3000,
	    slidesToScroll: 1,
	    slidesToShow: 3,
	    method: {},
	    responsive: [{ 
	      	breakpoint: 992,
	      	settings: {
	        	slidesToShow: 2	        	
	      	}	 
	    }, 
	    {	 
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



