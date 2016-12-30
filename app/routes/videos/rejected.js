import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
     return this.store.find('video', { status: 0 });
   },

   setupController: function(controller, model) {
     controller.set('video', model);
   }
});
