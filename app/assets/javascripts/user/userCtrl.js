/**
 * Created by ajay.kg on 05/10/16.
 */

angular.module('flapperNews')
    .controller('UserCtrl', ['$scope', '$location', 'userService', function($scope, $location, userService){

        $scope.ajaxInProgress = false;


        $scope.addUser = function() {

            if (!$scope.ajaxInProgress && userService.validateUser($scope.name, $scope.email, $scope.password)) {
                $scope.ajaxInProgress = true;
                userService.addUser($scope.name, $scope.email, $scope.password)
                    .then(function (res) {
                        console.log(res);
                        clearFields();
                        $location.path("/list-users");
                    }).finally(function(res) {
                        console.log(res);
                        $scope.ajaxInProgress = false;
                    });
            }
        };


        function clearFields () {
            $scope.name = "";
            $scope.email = "";
            $scope.password = "";
            $scope.ajaxInProgress = true;
        }
    }])
    .controller('UserListCtrl', ['$scope', 'userService', function($scope, userService){

         userService.getUsers().then(
            function(res) {
                $scope.users = res.data;
            });

    }]);
;