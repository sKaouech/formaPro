(function () {
    'use strict';
    angular
        .module('showApp', [])
        .controller('showController', showController);

    showController.$inject = ['$scope'];

    function showController($scope) {

        $scope.phones = [];//(3)

        $scope.yourName = "forma Pro";//(1)

        $scope.showMsg = function () {//(4)
            $scope.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];
        }

        $scope.status = true;

        $scope.show = function () {
            $scope.status = true;
        };
        $scope.hide = function () {
            $scope.status = false;
        };
    }
})();
 