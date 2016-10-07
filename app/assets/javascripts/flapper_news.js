angular.module('flapperNews', ['ui.router', 'templates', 'login'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

        function checkSessionAuth($http, $location) {
            console.log("hjashjdhsa");
            return $http.get('/is_authenticated.json').then(function(res){
                console.log(res);
                return;
            }, function(res){
                console.log(res);
                $location.path("/login");
            });
        }

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/_home.html',
                controller: 'MainCtrl',
                resolve: {
                    checkSession: checkSessionAuth,
                    postPromise: ['myFactory', function(myFactory){
                        return myFactory.getAll();
                    }]
                }
            })
            .state('posts', {
                url: '/posts/{id}',
                templateUrl: 'posts/_posts.html',
                controller: 'PostsCtrl',
                resolve: {
                    checkSession: checkSessionAuth,
                    post: ['$stateParams', 'myFactory', function($stateParams, myFactory) {
                        return myFactory.get($stateParams.id);
                    }]
                }
            })
            .state('file-upload', {
                url: '/file-upload',
                templateUrl: 'index/_file-upload.html',
                controller: 'IndexCtrl',
                resolve: {
                    checkSession: checkSessionAuth,
                }
            })
            .state('sign-up', {
                url: '/sign-up',
                templateUrl: 'user/_sign-up.html',
                controller: 'UserCtrl',
                resolve: {
                    checkSession: checkSessionAuth,
                }
            })
            .state('list-users', {
                url: '/list-users',
                templateUrl: 'user/_list-users.html',
                controller: 'UserListCtrl',
                resolve: {
                    checkSession: checkSessionAuth,
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'login/_home.html',
                controller: 'LoginCtrl'
            });

        $urlRouterProvider.otherwise('home');

        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

    }])
    .controller("SuperCtrl", function($scope, $location, $http){

        $scope.logout = function() {
            $http.get('/logout').then(function(res){
                $location.path('/login');
                location.reload();
            });
        }
    });