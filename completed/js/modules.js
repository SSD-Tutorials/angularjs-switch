(function(window, angular) {

    "use strict";

    window.ssdSystem = window.ssdSystem || {};

    window.ssdSystem.Services = angular.module('ssdServices', ['ngCookies']);
    window.ssdSystem.Directives = angular.module('ssdDirectives', ['ssdServices']);

    window.ssdSystem.App = angular.module(
        'ssdApp',
        ['ssdServices', 'ssdDirectives']
    );

})(window, angular);