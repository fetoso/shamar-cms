import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
      submit: function() {
        this.sendAction('action', this.item);
      },
      selectStatus: function(value) {
        this.set('item.status', value);
      },
      selectCategory: function(value) {
        this.set('item.category', value);
      },
    }
});
