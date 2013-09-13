/**
 * Created with JetBrains WebStorm.
 * User: rxferoli
 * Date: 8/15/13
 * Time: 10:15 AM
 * To change this template use File | Settings | File Templates.
 */
(function() {
    angular.module('cseWidget').service('suggestionService', [
        '$log', '$q', '$resource', 'CSE_CONFIG', function($log, $q, $resource, CSE_CONFIG) {
            var get, postLike, postDislike, postShare, postView, getUserCommunities, self;
            self = this;

            postView = function(assetId) {
                var defer;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'articles/' + assetId + '/views',{}, {'post': {method: 'POST', isArray: false}});

                defer = $q.defer();
                cseService.post({},function(results) {
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService postView error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            postShare = function(sharedData) {
                var defer;
                var assetId = sharedData.assetId;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'articles/' + assetId + '/social_shares',{}, {'post': {method: 'POST', isArray: false}});

                defer = $q.defer();
                cseService.post(sharedData.data, function(results) {
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService postShare error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            postLike = function(assetId) {
                var defer;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'articles/' + assetId + '/likes',{}, {'post': {method: 'POST', isArray: false}});

                defer = $q.defer();
                cseService.post({},function(results) {
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService postLike error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            postDislike = function(assetId) {
                var defer;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'articles/' + assetId + '/dislikes',{}, {'post': {method: 'POST', isArray: false}});

                defer = $q.defer();
                cseService.post({},function(results) {
                    //$log.info(results);
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService postDislike error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            get = function() {
                var defer;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'suggestions', {
                    callback: 'JSON_CALLBACK'
                }, {
                    get: {
                        method: 'JSONP',
                        isArray: true
                    }
                });
                defer = $q.defer();
                cseService.query({},function(results) {
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService get error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            getUserCommunities = function() {
                var defer;
                $log.info("In getUserCommunities");
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'social/my_communities', {
                    callback: 'JSON_CALLBACK'
                }, {
                    get: {
                        method: 'JSONP',
                        isArray: true
                    }
                });
                defer = $q.defer();
                cseService.query({},function(results) {
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService getUserCommunities error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            self.postLike = postLike;
            self.postDislike = postDislike;
            self.postShare = postShare;
            self.postView = postView;
            self.getUserCommunities = getUserCommunities;
            return self.get = get;
        }
    ]);

}).call(this);