/**
 * Created with JetBrains WebStorm.
 * User: rxferoli
 * Date: 8/20/13
 * Time: 10:54 AM
 * To change this template use File | Settings | File Templates.
 */
;(function(){
    angular.module('cseWidget').config(["$locationProvider", function($locationProvider) {
            return $locationProvider.html5Mode(true);
        }])
        .constant('CSE_CONFIG', {apiBaseUrl: '/api/v1/'});

        //    .config(['$httpProvider', function($httpProvider) {
        //      $httpProvider.defaults.useXDomain = true;
        //      delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //    }]);

        // https://localhost.qaols.phoenix.edu/api/v1/suggestions
        // /api/v1/suggestions
}).call(this);

