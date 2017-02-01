import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      this.sendAction('action', this.item);
    },
    selectActiveStatus: function(value) {
      this.set('item.is_active', value);
    }
  }
});
