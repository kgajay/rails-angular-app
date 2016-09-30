/**
 * Created by ajay.kg on 30/09/16.
 */
angular.module('flapperNews')
    .controller('MainCtrl', ['$scope', 'myFactory', function($scope, myFactory){
        $scope.test = 'Hello world!';

        //$scope.posts = [
        //    {title: 'post 1', upvotes: 5},
        //    {title: 'post 2', upvotes: 2},
        //    {title: 'post 3', upvotes: 15},
        //    {title: 'post 4', upvotes: 9},
        //    {title: 'post 5', upvotes: 4}
        //];
        //
        //$scope.addPost = function(){
        //    if(!$scope.title || $scope.title === '') { return; }
        //    $scope.posts.push({
        //        title: $scope.title,
        //        link: $scope.link,
        //        upvotes: 0
        //    });
        //    $scope.link = '';
        //    $scope.title = '';
        //};
        //
        //$scope.incrementUpvotes = function(post) {
        //    post.upvotes += 1;
        //};

        $scope.posts = myFactory.posts;
        $scope.addPost = function(){
            if(!$scope.title || $scope.title === '') { return; }
            myFactory.create({
                title: $scope.title,
                link: $scope.link,
            });
            $scope.link = '';
            $scope.title = '';
        };

        $scope.incrementUpvotes = function(post) {
            myFactory.upvote(post);
        };
    }]);