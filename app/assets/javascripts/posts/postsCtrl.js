/**
 * Created by ajay.kg on 30/09/16.
 */
angular.module('flapperNews')
    .controller('PostsCtrl', ['$scope', 'myFactory', 'post', function($scope, myFactory, post){

        //$scope.post = myFactory.get($stateParams.id);
        $scope.post = post;

        $scope.addComment = function(){
            if($scope.body === '') { return; }
            myFactory.addComment(post.id, {
                body: $scope.body,
                author: 'user',
            }).success(function(comment) {
                $scope.post.comments.push(comment);
            });
            $scope.body = '';
        };

        $scope.incrementUpvotes = function(comment){
            myFactory.upvoteComment(post, comment);
        };

    }]);