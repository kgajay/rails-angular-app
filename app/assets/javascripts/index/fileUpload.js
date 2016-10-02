/**
 * Created by ajay.kg on 02/10/16.
 */
angular.module('flapperNews')
    .directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }])
    .service('fileUpload', ['$http', function($http){

        this.allowedTypes = ['text/plain'];

        this.validateFile = function(file) {
            console.log("file name: " + file.name + ", size: " + file.size + ", type: " + file.type);
            if (!this.allowedTypes.includes(file.type)) {

                console.log("file type not allowed");
                return false;
            }
            return true;
        };

        this.uploadFileToUrl = function(file, uploadUrl){
            var fd = new FormData();
            fd.append('file', file);

            return $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                });
        };

        this.clear = function () {
            angular.element("input[type='file']").val(null);
        };

    }]);