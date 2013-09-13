(function () {
    angular.module('cseWidget').controller('cseSuggestionsController', [
            '$log', '$scope', '$location', 'suggestionService', 'createDialog', '$window',
            function ($log, $scope, $location, suggestionService, createDialogService, $window) {

                $scope.suggestions = [];
                $scope.currentPage = 0;
                $scope.pageSize = 3;
                $scope.courseId = "";

                /**
                 * Use in the widget to scroll through the list of articles.
                 * @returns {number}
                 */
                $scope.numOfPages = function () {
                    return Math.ceil($scope.suggestions.length / $scope.pageSize);
                }

                /**
                 * Post a view count and open a new window to read the article.
                 * @param index - is the index of the article in the suggestions list
                 */
                $scope.viewArticle = function (index) {
                    suggestionService.postView($scope.suggestions[index].assetId).then(function (results) {
                        $log.info(results);
                        $scope.suggestions[index].counters.views = results.viewCount;
                    });
                    $window.open($scope.suggestions[index].url);
                }

                /**
                 * Also know as "like". Post a like vote.
                 * @param index - is the index of the article in the suggestions list
                 */
                $scope.voteUp = function (index) {
                    suggestionService.postLike($scope.suggestions[index].assetId).then(function (results) {
                        $log.info(results);
                        $scope.suggestions[index].counters.likes = results.likes;
                    });
                }

                /**
                 * Also known as "Dislike". Post a dislike vote.
                 * @param index - is the index of the article in the suggestions list
                 */
                $scope.voteDown = function (index) {
                    suggestionService.postDislike($scope.suggestions[index].assetId).then(function (results) {
                        $log.info(results);
                        $scope.suggestions[index].counters.dislikes = results.dislikes;
                    });
                }

                /**
                 * Share article to Phoenix Connect.
                 * @param index - is the index of the article in the suggestions list
                 */
                $scope.launchPhoenixConnectModal = function (index) {
                    $scope.childScope = {article:{}, selectedCommunity:0, comment:""};
                    createDialogService('/views/phoenixconnect.html', {
                        id: 'csePhxConnDialog',
                        title: 'Create discussion post on PhoenixConnect',
                        backdrop: true,
                        controller: 'phoenixConnectController',
                        success: {label: 'Post', fn: function () {
                            var data = {"assetId": $scope.suggestions[index].assetId,
                                "data":{"social":{"communityId":$scope.childScope.selectedCommunity,
                                    "comment":$scope.childScope.comment}}};

                            suggestionService.postShare(data).then(function (results) {
                                $log.info(results);
                                var socialShare = {};
                                socialShare.communityId = results.communityId;
                                socialShare.threadUrl = results.socialThreadUrl;
                                $scope.suggestions[index].socialShares.push(socialShare);
                                $log.info($scope.suggestions[index]);
                            });
                        }}
                    }, {
                        article: $scope.suggestions[index]
                    });
                };

                /**
                 * Flag the article as inappropriate
                 * @param index - is the index of the article in the suggestions list
                 */
                $scope.launchFlagCommentModal = function (index) {
                    $scope.childScope = {article:{}, comment:""};
                    createDialogService('/views/flagComment.html', {
                        id: 'cseflagCommentDialog',
                        title: 'Flag as Inappropriate',
                        backdrop: true,
                        controller: 'flagCommentController',
                        success: {label: 'Submit', fn: function () {
                            var data = {"assetId": $scope.suggestions[index].assetId,
                                "data":{"inappropriate":true, "comment":$scope.childScope.comment}};

                            suggestionService.deleteArticle(data).then(function (results) {
                                $log.info(results);
                                $scope.suggestions.splice(index,1);
                            });
                        }}
                    }, {
                        article: $scope.suggestions[index]
                    });
                };

                /**
                 * Get all suggestions for the current user
                 */
                return suggestionService.get().then(function (results) {
                    $scope.courseId = results[0].courseId
                    return $scope.suggestions = results[0].articles;
                })
            }
        ])
        .controller('phoenixConnectController', ['$log', '$scope', '$timeout', 'article','suggestionService','$window',
            function ($log, $scope, $timeout, article, suggestionService,$window) {
                var timer=false, btnStatus, duplicateShareUrl;

                $scope.article = $scope.$parent.$$childHead.childScope.article = article;
                $scope.communities = [];
                $scope.form = {comment:""};
                $scope.duplicated = false,

                /**
                 * Event handler every time a community is selected from the dropdown.
                 */
                    $scope.selectCommunity = function(){
                        $scope.$parent.$$childHead.childScope.selectedCommunity = $scope.form.selectedCommunity;
                        var selectedCommunity = $scope.$parent.$$childHead.childScope.selectedCommunity;
                        $scope.duplicated = false
                        for(var i=0; i < article.socialShares.length; i++){
                            if(article.socialShares[i].communityId === selectedCommunity){
                                $scope.duplicated = true;
                                duplicateShareUrl = article.socialShares[i].threadUrl;
                                break;
                            }
                        }
                        btnStatus();
                    };

                $scope.joinDiscussion = function(){
                    $window.location.href = duplicateShareUrl;
                }

                //This is a hack. It's not recommended to manipulate the DOM in the controller but in the directive
                btnStatus = function(){
                    if($scope.duplicated || $scope.form.comment.length == 0 ){
                        $window.document.getElementById("cseModalSuccessBtn").disabled = true;
                    } else {
                        $window.document.getElementById("cseModalSuccessBtn").disabled = false;
                    }
                }

                suggestionService.getUserCommunities().then(function(results){
                    $scope.communities = results;
                    $scope.form.selectedCommunity = $scope.$parent.$$childHead.childScope.selectedCommunity = $scope.communities[0].id;
                    $scope.selectCommunity();
                });

                $scope.$watch('form.comment', function(){
                    if(timer){
                        $timeout.cancel(timer)
                    }
                    timer= $timeout(function(){
                        $scope.$parent.$$childHead.childScope.comment = $scope.form.comment;
                        btnStatus();
                    },500);
                });
            }])
        .controller('flagCommentController',['$log', '$scope', '$timeout', 'article','$window',
            function ($log, $scope, $timeout, article, $window) {
                var timer=false, btnStatus;

                $scope.article = $scope.$parent.$$childHead.childScope.article = article;
                $scope.form = {comment:""};

                //This is a hack. It's not recommended to manipulate the DOM in the controller but in the directive
                btnStatus = function(){
                    if($scope.form.comment.length == 0 ){
                        $window.document.getElementById("cseModalSuccessBtn").disabled = true;
                    } else {
                        $window.document.getElementById("cseModalSuccessBtn").disabled = false;
                    }
                }

                $scope.$watch('form.comment', function(){
                    if(timer){
                        $timeout.cancel(timer)
                    }
                    timer= $timeout(function(){
                        $scope.$parent.$$childHead.childScope.comment = $scope.form.comment;
                        btnStatus();
                    },500);
                });
            }]);
}).call(this);
