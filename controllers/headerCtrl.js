angular.module("app").controller("headerCtrl", function ($scope, $state, $rootScope, $window, $location) {
    
    $scope.location = $location;
    $scope.innerBox = [ 
        {name: 'Create a custom directive', completed: true},
    ];
    $scope.innerBox1 = [ 
        {name: 'Create a custom directive', completed: true}
    ];

    // pagination start 
        $scope.currentPage = 4; 
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };
    // pagination end 


    $scope.overflow = {hide:false};
	$scope.openClass = {show:false};
    $scope.notificationtoggle = function() {
      	$scope.openClass.show = !$scope.openClass.show;
      	$scope.overflow.hide= !$scope.overflow.hide;
    };	
   /* if ($state.current.name == "main.login") {
        $scope.iconsstatus = "hidden";      
        $scope.userprofile = "hidden"; 
        $scope.loginlinks = "visible";       
    }
    if ($state.current.name == "main.signup") {
        $scope.iconsstatus = "hidden";      
        $scope.userprofile = "hidden"; 
        $scope.loginlinks = "visible";       
    }
    if ($state.current.name == "/") {
        $scope.iconsstatus = "visible";      
        $scope.loginlinks = "hidden";  
        $scope.userprofile = "hidden";      
    }
    if ($state.current.name == "main.terms") {
        $scope.iconsstatus = "hidden";      
        $scope.loginlinks = "visible";  
        $scope.userprofile = "hidden";        
    }
    if ($state.current.name == "main.privacy") {
        $scope.iconsstatus = "hidden";      
        $scope.loginlinks = "visible";  
        $scope.userprofile = "hidden";          
    }
    if ($state.current.name == "main.consent") {
        $scope.iconsstatus = "hidden";      
        $scope.loginlinks = "visible";   
        $scope.userprofile = "hidden";        
    }
    if ($state.current.name == "main.delete-account") {
        $scope.iconsstatus = "visible";         
        $scope.loginlinks = "hidden";  
        $scope.userprofile = "visible";        
        $scope.becomeprofession = "hidden";        
    }
    if ($state.current.name == "main.activity-log") {
        $scope.iconsstatus = "visible";         
        $scope.loginlinks = "hidden";  
        $scope.userprofile = "visible";        
        $scope.becomeprofession = "hidden";        
    }
    if ($state.current.name == "main.changepassword") {
        $scope.iconsstatus = "visible";         
        $scope.loginlinks = "hidden";  
        $scope.userprofile = "visible";        
        $scope.becomeprofession = "hidden";        
    }
    if ($state.current.name == "main.account-setting") {
        $scope.iconsstatus = "visible";      
        $scope.loginlinks = "hidden";  
        $scope.userprofile = "visible";        
        $scope.becomeprofession = "hidden";            
    } 
    if ($state.current.name == "main.blog-and-market-trend") {
        $scope.iconsstatus = "visible";      
        $scope.loginlinks = "hidden";  
        $scope.userprofile = "visible";        
        $scope.becomeprofession = "hidden";            
    }
    if ($state.current.name == "main.my-library") {
        $scope.iconsstatus = "visible";      
        $scope.loginlinks = "hidden";  
        $scope.userprofile = "visible";        
        $scope.becomeprofession = "hidden";            
    }
    if ($state.current.name == "main.contract") {
        $scope.iconsstatus = "visible";      
        $scope.loginlinks = "hidden";  
        $scope.userprofile = "visible";        
        $scope.becomeprofession = "hidden";            
    }*/

    $scope.oneAtATime = true;

    $scope.groups = [
        {
          title: 'Dynamic Group Header - 1',
          content: 'Dynamic Group Body - 1'
        },
        {
          title: 'Dynamic Group Header - 2',
          content: 'Dynamic Group Body - 2'
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
    };

    $scope.index = 0;

});



 