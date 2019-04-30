angular.module("app").directive('pagination', function(){
  return {
    templateUrl: '../../views/directive-html/pagination.html', 
    scope: {
      list: '=',
      title: '@'
    }
  };
});