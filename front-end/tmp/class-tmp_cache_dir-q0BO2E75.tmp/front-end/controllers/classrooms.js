define('front-end/controllers/classrooms', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        classrooms: Ember['default'].computed.alias('model'),
        name: null,
        description: null,

        actions: {
            showClassroom: function showClassroom() {
                this.get('classrooms').forEach(function (classroom) {
                    console.log(classroom.get('name'), classroom.get('description'));
                });
            },

            addClassroom: function addClassroom() {

                var classroom = this.store.createRecord('classroom', {
                    name: this.get('name'),
                    description: this.get('description')
                });

                this.set('name', null);
                this.set('description', null);

                classroom.save();
            }
        }
    });

});