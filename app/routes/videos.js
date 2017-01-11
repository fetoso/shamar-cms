import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function () {
    return Ember.RSVP.hash({
      videos: this.store.findAll('video'),
      
    });
  },

  setupController: function(controller, models) {
    return controller.setProperties(models);
  },
  session: Ember.inject.service('session'),
  actions: {

  },
});
