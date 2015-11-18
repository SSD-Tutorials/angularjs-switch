(function(app) {

    "use strict";

    app.controller(
        'BodyController',
        [
            '$scope',
            'FlipTheSwitchService',
            function($scope, FlipTheSwitchService) {

                $scope.switchedOn = FlipTheSwitchService.isSwitchedOn('light');

                $scope.$watch(
                    function() {

                        return FlipTheSwitchService.switchedOn['light'];

                    },
                    function() {

                        $scope.switchedOn = FlipTheSwitchService.isSwitchedOn('light');

                    }
                );

            }
        ]
    );

})(window.ssdSystem.App);