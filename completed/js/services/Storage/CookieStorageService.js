(function(app) {

    "use strict";

    app.service(
        'CookiesStorageService',
        [
            '$cookies',
            function($cookies) {

                return {

                    set : function(key, value) {

                        $cookies.put(key, value);

                    },

                    get : function(key) {

                        return $cookies.get(key);

                    },

                    remove : function(key) {

                        $cookies.remove(key);

                    }

                };

            }
        ]
    );

})(window.ssdSystem.Services);