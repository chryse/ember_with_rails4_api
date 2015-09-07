define('front-end/models/classroom', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        name: DS['default'].attr('string'),
        description: DS['default'].attr('string')
    });

});