angular.module('flapperNews', ['ui.router', 'templates'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/_home.html',
                controller: 'MainCtrl',
                resolve: {
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
                    post: ['$stateParams', 'myFactory', function($stateParams, myFactory) {
                        return myFactory.get($stateParams.id);
                    }]
                }
            });

        $urlRouterProvider.otherwise('home');

        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

    }]);