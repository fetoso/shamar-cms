import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
      return this.store.find('video', params.video_id);
    },

    setupController: function(controller, model) {
      controller.set('video', model);
    },

    actions: {
    }
});
