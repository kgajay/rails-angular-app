/**
 * Created by ajay.kg on 02/10/16.
 */
angular.module('flapperNews')
    .controller('IndexCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){

        $scope.ajaxInProgress = false;


        $scope.uploadFile = function() {
            var file = $scope.myFile;

            if (!$scope.ajaxInProgress) {
                if (fileUpload.validateFile(file)) {

                    $scope.ajaxInProgress = true;

                    var uploadUrl = "/upload-file";
                    fileUpload.uploadFileToUrl(file, uploadUrl).then(function (res) {
                        console.log(res);
                        fileUpload.clear();
                        $scope.ajaxInProgress = false;
                    });
                } else {
                    $scope.ajaxInProgress = false;
                }
            }
        };

    }]);