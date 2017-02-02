import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteContent: function(content) {
      this.sendAction('action', content);
    }
  }
});
