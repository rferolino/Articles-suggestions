/**
 * Created with JetBrains WebStorm.
 * User: rxferoli
 * Date: 8/12/13
 * Time: 4:00 PM
 * To change this template use File | Settings | File Templates.
 */
(function() {
  angular.module('cseWidget').filter('startFrom', function() {
      return function(input, start) {
        start = +start;
        return input.slice(start);
      };
    }
  );

}).call(this);
