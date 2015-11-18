(function(app) {

    "use strict";

    app.service(
        'HelperService',
        function() {

            return {

                isEmpty : function(value) {

                    return (

                        typeof value === 'undefined' ||
                        value === '' ||
                        value === false ||
                        value === null ||
                        isNaN(value)

                    );

                }

            };

        }
    );

})(window.ssdSystem.Services);