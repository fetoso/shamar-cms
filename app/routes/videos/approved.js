import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('video', { status: 1 });
  },

  setupController: function(controller, model) {
    controller.set('video', model);
  }
});
