import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return { name: '', slug: '' };
  },

  setupController: function(controller, model) {
    controller.set('category', model);
  },

  actions: {
    createCategory: function(category) {
      var _this = this;
      this.store.createRecord('category', category).save().then( function() {
        _this.transitionTo('categories');
      });
    }
  }
});
