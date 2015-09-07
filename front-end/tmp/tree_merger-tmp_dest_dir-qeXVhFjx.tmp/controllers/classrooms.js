import Ember from 'ember';

export default Ember.Controller.extend({
    classrooms: Ember.computed.alias('model'),
    name: null,
    description: null,

    actions: {
        showClassroom: function() {
            this.get('classrooms').forEach(function(classroom) {
                console.log(classroom.get('name'), classroom.get('description'));
            });
        },

        addClassroom: function() {

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
