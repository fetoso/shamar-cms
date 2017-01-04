import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return Ember.Object.create({ identification: '', password: ''});
    },

    setupController: function (controller, model) {
        controller.set('credentials', model);
    },

    session: Ember.inject.service('session'),

    actions: {
        authenticate: function(credentials) {
          var _this = this;
          var authenticator = 'authenticator:token';
          this.get('session').authenticate(authenticator, credentials).then(function() {
            _this.transitionTo('queue');
          });
        }
    }
});
