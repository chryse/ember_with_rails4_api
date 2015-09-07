define('front-end/routes/index', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        redirect: function redirect() {
            // this.transitionTo('classrooms');
        }
    });

});