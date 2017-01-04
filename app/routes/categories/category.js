import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params.category_id);
  },

  setupController: function(controller, model) {
    controller.set('category', model);
  },

  actions: {
    updateCategory: function(category) {
      var _this = this;
      category.save().then( function() {
        _this.transitionTo('categories');
      });
    }
  }

});
