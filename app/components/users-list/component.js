import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteUser: function(user) {
      this.sendAction('action', user);
    }
  }
});
