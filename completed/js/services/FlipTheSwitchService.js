(function(app) {

    "use strict";

    app.service(
        'FlipTheSwitchService',
        [
            'HelperService',
            'StorageService',
            function(
                HelperService,
                StorageService
            ) {

                return {

                    switchedOn : {},

                    isSwitchedOn : function(index) {

                        if ( ! this.switchedOn.hasOwnProperty(index)) {

                            var value = StorageService.get(index);

                            this.switchedOn[index] = ! HelperService.isEmpty(value);

                        }

                        return this.switchedOn[index];

                    },

                    switchOff : function(index) {

                        StorageService.remove(index);

                        this.switchedOn[index] = false;

                    },

                    switchOn : function(index) {

                        StorageService.set(index, 1);

                        this.switchedOn[index] = true;

                    },

                    flipSwitch : function(index) {

                        if (this.isSwitchedOn(index)) {

                            this.switchOff(index);

                        } else {

                            this.switchOn(index);

                        }

                    }

                };

            }
        ]
    );

})(window.ssdSystem.Services);