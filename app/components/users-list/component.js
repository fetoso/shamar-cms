import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteUser: function(user) {
      this.sendAction('action', user);
    },
    filterList: function(filter) {
      this.sendAction('filter', filter);
    }
  }
});
