import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      this.sendAction('action', this.item);
    },
    selectRole: function(value) {
      this.set('item.is_admin', value);
    },
    selectState: function(value) {
      this.set('item.state', value);
    },
    selectCountry: function(value) {
      this.set('item.country', value);
    },
    selectVerified: function(value) {
      this.set('item.verified', value);
    },
    selectBan: function(value) {
      this.set('item.is_banned', value);
    }
  }
});
