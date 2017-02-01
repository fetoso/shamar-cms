import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function () {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category')
    });
  },

  setupController: function(controller, models) {
    return controller.setProperties(models);
  },
  session: Ember.inject.service('session'),
  actions: {
    deleteCategory: function(category) {
      if (confirm("Are you sure you want to Delete this item?")) {
        var _this = this;
        category.destroyRecord().then(function() {
          _this.transitionTo('categories');
        });
      }
    },
  }

});
