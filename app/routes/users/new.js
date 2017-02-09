import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },

  setupController: function(controller, model) {
    controller.set('user', model);
  },

  actions: {
    createUser: function(user) {
      console.log('user', user);
      var _this = this;
      this.store.createRecord('user', user).save().then( function() {
        _this.transitionTo('users');
      });
    }
  }
});
