(function () {
    'use strict';
    angular
        .module('app', [])
        .controller('firstController', firstController)
        .controller('secondController', secondController);

    firstController.$inject = ['$scope'];
    secondController.$inject = ['$scope'];

    function firstController($scope) {

        // Initialize the model variables
        $scope.firstName = "Seifeddine";
        $scope.lastName = "Kaouech";

        // Define utility functions
        $scope.getFullName = function () {
            return $scope.firstName + " " + $scope.lastName;
        };

    }

    function secondController($scope) {

        // Initialize the model variables
        $scope.firstName = "Abd";
        $scope.middleName = "rahmen";
        $scope.lastName = "salhi";

        // Define utility functions
        $scope.getFullName = function () {
            return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
        };

    }
})();
 