import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return { name: '', lastname: '', email: "", role: null };
  },

  setupController: function(controller, model) {
    controller.set('user', model);
  },

  actions: {
    createUser: function(user) {
      var _this = this;
      this.store.createRecord('user', user).save().then( function() {
        _this.transitionTo('users');
      });
    }
  }
});
