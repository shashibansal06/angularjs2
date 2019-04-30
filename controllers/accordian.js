angular.module("app").controller("accordianCtrl", function ($scope, $state, $rootScope, $window) {
	$scope.oneAtATime = true;

  	$scope.groups = [
	    {
	      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt magna aliqua?',
	      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor insquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
	    },
	    {
	      title: 'Lorem ipsum elit sed do eiusmod tempor incididunt magna aliqua?',
	      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
	    },
	    {
	      title: 'Lorem ipsum dolorectetur adipisicing elit sed do eiusmod tempor incididunt magna aliqua?',
	      content: 'Lorem ipion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor insquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
	    },
	    {
	      title: 'Lorem ipsum dolor adipisicing elit sed do eiusmod tempor incididunt magna aliqua?',
	      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exeri dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
	    },
	    {
	      title: 'Lorem ipsum dolor adipisicing elit sed do eiusmod tempor incididunt magna aliqua?',
	      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exeri dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
	    }
  	];

  	$scope.status = {
    	isCustomHeaderOpen: false,
    	isFirstOpen: true,
    	isFirstDisabled: false
  	};
});



