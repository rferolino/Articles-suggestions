/**
 * Created with JetBrains WebStorm.
 * User: rxferoli
 * Date: 8/15/13
 * Time: 11:07 AM
 * To change this template use File | Settings | File Templates.
 */
(function() {
    angular.module('cseWidget').run([
        '$rootScope', '$log', function($rootScope, $log) {
            return $rootScope.$on('$routeChangeSuccess', function(event, currentRoute, priorRoute) {
                return $rootScope.$broadcast("" + currentRoute.controller + "$routeChangeSuccess", currentRoute, priorRoute);
            });
        }
    ]);

}).call(this);

