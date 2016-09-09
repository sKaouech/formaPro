(function () {
    'use strict';
    angular
        .module('app', [])
        .controller('simpleController', simpleController);

    simpleController.$inject = ['$scope'];

    function simpleController($scope) {

        $scope.firstName = "Ali";
        $scope.lastName = "Salhi";

        // Define utility functions
        $scope.getFullName = function ()
        {
            return $scope.firstName + " " + $scope.lastName;
        };

    }
})();
 