import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, RouteMixin, {

  model: function (params) {
    params.orderBy = 'created_at';
    return Ember.RSVP.hash({
      categories: this.findPaged('category', params) // this.store.findAll('category')
    });
  },

  setupController: function(controller, models) {
    controller.set('content', models.categories.get('meta'));
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
