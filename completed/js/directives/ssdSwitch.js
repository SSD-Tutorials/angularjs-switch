(function(app) {

    "use strict";

    app.directive(
        'ssdSwitch',
        [
            'FlipTheSwitchService',
            function(FlipTheSwitchService) {

                return {

                    restrict: 'E',
                    templateUrl: '/directives/ssd-switch.html',
                    replace: true,
                    scope: {
                        switchIndex: "@",
                        switchOnLabel: "@",
                        switchOffLabel: "@"
                    },
                    controller: [
                        '$scope',
                        function($scope) {

                            $scope.switchedOn = false;

                            $scope.getSwitchStatus = function(index) {

                                $scope.switchedOn = FlipTheSwitchService.isSwitchedOn(index);

                            };

                            $scope.flipSwitch = function(index) {

                                FlipTheSwitchService.flipSwitch(index);

                                $scope.getSwitchStatus(index);

                            };

                        }
                    ]

                };

            }
        ]
    );

})(window.ssdSystem.Directives);