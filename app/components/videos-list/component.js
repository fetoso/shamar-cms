import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openModal: function(item) {
      this.sendAction('action', item);
    }
  }
});
