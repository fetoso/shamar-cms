import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function () {
      return Ember.RSVP.hash({
        contents: this.store.findAll('content')
      });
    },

    setupController: function(controller, models) {
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
