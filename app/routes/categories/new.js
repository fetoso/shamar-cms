import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return { name: '', slug: '' };
  },

  setupController: function(controller, model) {
    controller.set('category', model);
  },

  actions: {
    createCategory: function(category) {
      // var _this = this;
      this.store.createRecord('category', category).save().then( function() {
        window.location.replace('/categories');
        // _this.transitionTo('categories');
      });
    }
  }
});
