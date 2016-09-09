(function () {
    'use strict';
    angular
        .module('directiveApp', [])
        .controller('directiveController', directiveController);

    directiveController.$inject = ['$scope'];

    function directiveController($scope) {

        //$scope.phones = [];//(3)

        //var vm = this;//(5)
        //vm.testVm = "test VM";//(5)

        $scope.yourName = "forma Pro";//(1)

        //$scope.showMsg = function () {//(4)
        //    $scope.phones = [
        //        {
        //            name: 'Nexus S',
        //            snippet: 'Fast just got faster with Nexus S.'
        //        }, {
        //            name: 'Motorola XOOM™ with Wi-Fi',
        //            snippet: 'The Next, Next Generation tablet.'
        //        }, {
        //            name: 'MOTOROLA XOOM™',
        //            snippet: 'The Next, Next Generation tablet.'
        //        }
        //    ];
        //}

        //$scope.phones = [//(3)
        //    {
        //        name: 'Nexus S',
        //        snippet: 'Fast just got faster with Nexus S.'
        //    }
        //];

    }
})();
 