import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteCategory: function(category) {
      this.sendAction('action', category);
    },
    filterList: function(filter) {
      this.sendAction('filter', filter);
    }
  }
});
