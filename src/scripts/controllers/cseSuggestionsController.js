(function () {
    angular.module('cseWidget').controller('cseSuggestionsController', [
            '$log', '$scope', '$location', 'suggestionService', 'createDialog', '$window',
            function ($log, $scope, $location, suggestionService, createDialogService, $window) {

                $scope.suggestions = [];
                $scope.currentPage = 0;
                $scope.pageSize = 3;
                $scope.courseId = "";

                $scope.numOfPages = function () {
                    return Math.ceil($scope.suggestions.length / $scope.pageSize);
                }

                $scope.viewArticle = function (index) {
                    suggestionService.postView($scope.suggestions[index].assetId).then(function (results) {
                        //$log.info(results);
                        $scope.suggestions[index].viewCount = results.viewCount;
                    });
                    $window.open($scope.suggestions[index].url);
                }

                $scope.voteUp = function (index) {
                    suggestionService.postLike($scope.suggestions[index].assetId).then(function (results) {
                        //$log.info(results);
                        $scope.suggestions[index].likes = results.likes;
                    });
                }

                $scope.voteDown = function (index) {
                    suggestionService.postDislike($scope.suggestions[index].assetId).then(function (results) {
                        //$log.info(results);
                        $scope.suggestions[index].dislikes = results.dislikes;
                    });
                }

                $scope.launchPhoenixConnectModal = function (index) {
                    $scope.childScope = {article:{}, selectedCommunity:0, comment:""};
                    createDialogService('/views/phoenixconnect.html', {
                        id: 'csePhxConnDialog',
                        title: 'Create discussion post on PhoenixConnect',
                        backdrop: true,
                        controller: 'phoenixConnectController',
                        success: {label: 'Post', fn: function () {
                            var data = {"assetId": $scope.suggestions[index].assetId,
                                "data":{"communityId":$scope.childScope.selectedCommunity,
                                    "comment":$scope.childScope.comment}};

                            suggestionService.postShare(data).then(function (results) {
                                $scope.suggestions[index].socialShareCount = results.socialShareCount;
                            });
                        }}
                    }, {
                        article: $scope.suggestions[index]
                    });
                };

                $scope.launchFlagCommentModal = function (index) {
                    $scope.childScope = {article:{}, comment:""};
                    createDialogService('/views/flagComment.html', {
                        id: 'cseflagCommentDialog',
                        title: '"Flag as Inappropriate" Comment',
                        backdrop: true,
                        controller: 'flagCommentController',
                        success: {label: 'Submit', fn: function () {
                            var data = {"assetId": $scope.suggestions[index].assetId,
                                "data":{"communityId":$scope.childScope.selectedCommunity,
                                    "comment":$scope.childScope.comment}};

                            suggestionService.postShare(data).then(function (results) {
                                $scope.suggestions[index].socialShareCount = results.socialShareCount;
                            });
                        }}
                    }, {
                        article: $scope.suggestions[index]
                    });
                };

                return suggestionService.get().then(function (results) {
                    $scope.courseId = results[0].courseId
                    return $scope.suggestions = results[0].articles;
                })
            }
        ])
        .controller('phoenixConnectController', ['$log', '$scope', '$timeout', 'article','suggestionService',
            function ($log, $scope, $timeout, article, suggestionService) {
                var timer=false;

                $scope.article = $scope.$parent.$$childHead.childScope.article = article;
                $scope.communities = [];
                $scope.form = {comment:""};

                suggestionService.getUserCommunities().then(function(results){
                    $scope.communities = results;
                    $scope.form.selectedCommunity = $scope.$parent.$$childHead.childScope.selectedCommunity = $scope.communities[0].id;
                });

                $scope.selectCommunity = function(){
                    $scope.$parent.$$childHead.childScope.selectedCommunity = $scope.form.selectedCommunity;
                    //$log.info($scope.$parent.$$childHead.childScope.selectedCommunity);
                };


                $scope.$watch('form.comment', function(){
                    if(timer){
                        $timeout.cancel(timer)
                    }
                    timer= $timeout(function(){
                        $scope.$parent.$$childHead.childScope.comment = $scope.form.comment;
                    },1000);
                });
            }])
        .controller('flagCommentController',['$log', '$scope', '$timeout', 'article','suggestionService',
            function ($log, $scope, $timeout, article, suggestionService) {
                var timer=false;

                $scope.article = $scope.$parent.$$childHead.childScope.article = article;
                $scope.communities = [];
                $scope.form = {comment:""};

                $scope.$watch('form.comment', function(){
                    if(timer){
                        $timeout.cancel(timer)
                    }
                    timer= $timeout(function(){
                        $scope.$parent.$$childHead.childScope.comment = $scope.form.comment;
                    },1000);
                });
            }]);
    ;
}).call(this);
