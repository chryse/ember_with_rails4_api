define('front-end/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].RESTAdapter.extend({
        host: 'http://localhost:3000'
    });

});