/**
 * Created with JetBrains WebStorm.
 * User: rxferoli
 * Date: 8/15/13
 * Time: 10:15 AM
 * To change this template use File | Settings | File Templates.
 */
(function() {
    angular.module('cseWidget').service('suggestionService', [
        '$log', '$q', '$resource', '$http', 'CSE_CONFIG', function($log, $q, $resource, $http, CSE_CONFIG) {
            var get, postLike, postDislike, postShare, postView, getUserCommunities, deleteArticle, self;
            self = this;

            /**
             * Post view count
             * @param assetId
             */
            postView = function(assetId) {
                var defer;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'articles/' + assetId + '/views',{}, {'post': {method: 'POST', isArray: false}});

                defer = $q.defer();
                cseService.post({},function(results) {
                    //$log.info(results);
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService postView error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            /**
             * Post share to phoenix connect count
             * @param sharedData
             */
            postShare = function(sharedData) {
                var defer;
                var assetId = sharedData.assetId;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'articles/' + assetId + '/shares',{}, {'post': {method: 'POST', isArray: false}});

                defer = $q.defer();
                cseService.post(sharedData.data, function(results) {
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService postShare error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            /***
             * Post an inappropriate flag which marks the asset for deletion
             * @param assetId
             */
            deleteArticle = function(assetData) {
                var defer;
                var assetId = assetData.assetId;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'articles/' + assetId +'/inappropriate',{}, {'remove': {method: 'POST', isArray: false}});

                defer = $q.defer();
                $log.info(assetData.data);
                cseService.remove(assetData.data, function(results) {
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService deleteArticle error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            }

            /**
             * Post "like" or thumbs-up count
             * @param assetId
             */
            postLike = function(assetId) {
                var defer;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'articles/' + assetId + '/likes',{}, {'post': {method: 'POST', isArray: false}});

                defer = $q.defer();
                cseService.post({},function(results) {
                    //$log.info(results);
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService postLike error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            /**
             * post a dislike vote to CSE api services.
             * @param assetId. Example: https://local.qaols.phoenix.edu/api/v1/articles/01-HTML-520d4cfbbf3e2526b57b861f/dislikes
             */
            postDislike = function(assetId) {
                var defer;
                var cseService = $resource(CSE_CONFIG.apiBaseUrl + 'articles/' + assetId + '/dislikes',{}, {'post': {method: 'POST', isArray: false}});

                defer = $q.defer();
                cseService.post({},function(results) {
                    $log.info(results);
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService postDislike error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            /**
             * Get a list of suggestions from the CSE API services. The identity of
             * the user is passed to the api service using the bearer assertion. The assertion
             * contains the profileId of the user. CSE knows about the current course(s) that the
             * user takes and determines the articles to return using the course syllabus weekly objectives.
             * @param  None
             * @return {[array of articles]}
             * See: https://local.qaols.phoenix.edu/api/v1/suggestions
             */
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
                    //$log.info(results);
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService get error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            /***
             * Get the list of communities that the user can share the article
             */
            getUserCommunities = function() {
                var defer;
                //$log.info("In getUserCommunities");
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
                    //$log.info(results);
                    return defer.resolve(results);
                }, function(results) {
                    $log.error('suggestionsService getUserCommunities error', results);
                    return defer.reject(results);
                });

                return defer.promise;
            };

            /**
             * Expose the service methods
             */
            self.postLike = postLike;
            self.postDislike = postDislike;
            self.postShare = postShare;
            self.postView = postView;
            self.deleteArticle = deleteArticle;
            self.getUserCommunities = getUserCommunities;
            return self.get = get;
        }
    ]);

}).call(this);