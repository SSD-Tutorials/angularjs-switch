(function(app) {

    "use strict";

    app.service(
        'StorageService',
        [
            'CookiesStorageService',
            'LocalStorageService',
            'SessionStorageService',
            function(
                CookiesStorageService,
                LocalStorageService,
                SessionStorageService
            ) {

                return SessionStorageService;

            }
        ]
    );

})(window.ssdSystem.Services);