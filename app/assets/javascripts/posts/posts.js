angular.module('flapperNews')
    .factory('myFactory', ['$http', function($http){
        var obj = {
            posts: []
        };

        obj.getAll = function() {
            return $http.get('/posts.json').success(function(data){
                angular.copy(data, obj.posts);
            });
        };

        obj.create = function(post) {
            return $http.post('/posts.json', post).success(function(data){
                obj.posts.push(data);
            });
        };

        obj.upvote = function(post) {
            return $http.put('/posts/' + post.id + '/upvote.json')
                .success(function(data){
                    post.upvotes += 1;
                });
        };

        obj.get = function(id) {
            return $http.get('/posts/' + id + '.json').then(function(res){
                return res.data;
            });
        };

        obj.addComment = function(id, comment) {
            return $http.post('/posts/' + id + '/comments.json', comment);
        };

        obj.upvoteComment = function(post, comment) {
            return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
                .success(function(data){
                    comment.upvotes += 1;
                });
        };

        return obj;
    }]);