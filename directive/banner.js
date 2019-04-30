angular.module("app").directive('banner', function(){
  return {
    templateUrl: '../../views/directive-html/banner.html', 
    scope: {
      tabs: '=',
      customertabs: '=',
      profestionaltabs: '=',
      manufacturertabs: '=',
      title: '@'  
    }
  };
});