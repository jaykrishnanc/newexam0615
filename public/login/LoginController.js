angular.module('exam')

    .controller('LoginController', ['$scope', function($scope) {
        $scope.master = {};

        $scope.Login = function(user) {

        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    }]);