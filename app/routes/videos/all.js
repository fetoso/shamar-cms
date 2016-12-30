import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findAll('video');
  },

  setupController: function(controller, model) {
    controller.set('video', model);
  }
});
