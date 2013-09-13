/**
 * Created with JetBrains WebStorm.
 * User: rxferoli
 * Date: 8/12/13
 * Time: 1:18 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module('cseWidget').service('messageService', [
    '$log', '$rootScope', function($log, $rootScope) {
        var publish, self, subscribe;
        self = this;
        publish = function(name, parameters) {
            parameters.timeStamp = Date.now();
            return $rootScope.$broadcast(name, parameters);
        };
        subscribe = function(name, listener) {
            return $rootScope.$on(name, listener);
        };
        self.publish = publish;
        return self.subscribe = subscribe;
    }
]);
