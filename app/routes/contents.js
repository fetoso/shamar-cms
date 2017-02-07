import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, RouteMixin, {
    model: function (params) {
      params.orderBy = 'created_at';
      return Ember.RSVP.hash({
        contents: this.findPaged('content', params) // this.store.findAll('content')
      });
    },

    setupController: function(controller, models) {
      controller.set('content', models.contents.get('meta'));
      return controller.setProperties(models);
    },
    session: Ember.inject.service('session'),
    actions: {
      deleteContent: function(content) {
        if (confirm("Are you sure you want to Delete this item?")) {
          var _this = this;
          content.destroyRecord().then(function() {
            _this.transitionTo('contents');
          });
        }
      },
    }
});
