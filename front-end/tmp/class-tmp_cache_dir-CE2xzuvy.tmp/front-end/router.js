define('front-end/router', ['exports', 'ember', 'front-end/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('classrooms');
  });

  exports['default'] = Router;

});