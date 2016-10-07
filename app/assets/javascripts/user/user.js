/**
 * Created by ajay.kg on 05/10/16.
 */

angular.module('flapperNews')
    .service('userService', ['$http', function($http){


        this.validateUser = function(name, email, password) {

            // TODO write user validation case and propagate error
            return true;
        };

        this.addUser = function(name, email, password) {

            var data = {
                "name": name,
                "email" : email,
                "password" : password
            };

            return $http.post("/add-user", data, {
                headers: {'Content-Type': 'application/json'}
            });
        };

        this.getUsers = function() {
            return $http.get('/list-users');
        };

    }]);