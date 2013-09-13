/**
 * Created with JetBrains WebStorm.
 * User: rxferoli
 * Date: 8/19/13
 * Time: 2:29 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module('cseWidget').
    filter('fromNow', function() {
        return function(dateString) {
            return moment(new Date(dateString)).fromNow()
        };
    });
