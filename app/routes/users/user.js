import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.user_id);
  },

  setupController: function(controller, model) {
    controller.set('user', model);
  },

  actions: {
    updateUser: function(user) {
      var _this = this;
      user.save().then( function() {
        _this.transitionTo('users');
      });
    }
  }

});
