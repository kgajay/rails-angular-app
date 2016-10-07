/**
 * Created by ajay.kg on 07/10/16.
 */

angular.module('login', [])
    .controller('LoginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

        $scope.ajaxInProgress = false;

        $scope.login = function(loginForm) {

            if(!loginForm.$valid){
                alert("form is not valid");
                return;
            }


            var requesObj = {
                username: loginForm.username.$modelValue,
                username: loginForm.password.$modelValue
            }

            $http.post('/login', requesObj).then(function(res){
                console.log(res);
                $location.path('/home');
            }).finally(function(res) {
                console.log(res);
                $scope.ajaxInProgress = false;
            });
        }

    }]);