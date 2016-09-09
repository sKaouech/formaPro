(function () {
    'use strict';
    angular
        .module('app', [])
        .controller('firstControllerScope', firstControllerScope)
        .controller('secondControllerScope', secondControllerScope)
        .controller('thirdControllerScope', thirdControllerScope);

    firstControllerScope.$inject = ['$scope'];
    secondControllerScope.$inject = ['$scope'];
    thirdControllerScope.$inject = ['$scope'];

    function firstControllerScope($scope) {

        // Initialize the model variables
        $scope.firstName = "Ali";

    }

    function secondControllerScope($scope) {

        // Initialize the model variables
        $scope.lastName = "Salhi";

        // Define utility functions
        $scope.getFullName = function () {
            return $scope.firstName + " " + $scope.lastName;
        };

    }

    function thirdControllerScope($scope) {

        // Initialize the model variables
        $scope.middleName = "rahmen";
        $scope.lastName = "Tounsie";

        // Define utility functions
        $scope.getFullName = function () {
            return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
        };

    }
})();
 