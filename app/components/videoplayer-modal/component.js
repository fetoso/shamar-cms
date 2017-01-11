import Ember from 'ember';

export default Ember.Component.extend({
    setup: function() {
     console.log('aqui');
  }.on('didInsertElement'),
  actions: {
     closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
