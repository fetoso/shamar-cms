import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      this.sendAction('action', this.item);
    },
    selectRole: function(value) {
      this.set('item.role', value);
    },
    selectCity: function(value) {
      this.set('item.city', value);
    },
    selectCountry: function(value) {
      this.set('item.country', value);
    }
  }
});
