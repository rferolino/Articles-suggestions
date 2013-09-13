/**
 * Created with JetBrains WebStorm.
 * User: rxferoli
 * Date: 8/15/13
 * Time: 11:01 AM
 * To change this template use File | Settings | File Templates.
 */
(function() {
  angular.module('cseWidget').config([
    '$httpProvider', function($httpProvider) {
      return $httpProvider.responseInterceptors.push([
        '$log', '$rootScope', '$q', function($log, $rootScope, $q) {
          var error, success;
          success = function(response) {
            $rootScope.$broadcast("success:" + response.status, response);
            return response;
          };
          error = function(response) {
            var deferred;
            deferred = $q.defer();
            $rootScope.$broadcast("error:" + response.status, response);
            return deferred.reject(response);
          };
          return function(promise) {
            return promise.then(success, error);
          };
        }
      ]);
    }
  ]);

}).call(this);

