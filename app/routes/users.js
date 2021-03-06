import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';


export default Ember.Route.extend(RouteMixin, AuthenticatedRouteMixin, {
  queryParams: {
    orderBy: '-shamars',
  },
  model: function (params) {

    if(!params.orderBy) {
      params.orderBy = '-shamars';
    }

    return Ember.RSVP.hash({
      users: this.findPaged('user', params), // this.store.findAll('user')\
    });
  },

  setupController: function(controller, models) {
    controller.set('content', models.users.get('meta'));
    controller.set('meta', models.users.get('meta'));
    return controller.setProperties(models);
  },
  session: Ember.inject.service('session'),
  actions: {
    error: function(error, transition) {
      console.log('///alert///');
      // handle the error
      alert(error.message);
    },
    deleteUser: function(user) {
      if (confirm("Are you sure you want to Delete this item?")) {
        var _this = this;
        user.destroyRecord().then(function() {
          _this.transitionTo('users');
        });
      }
    },
    filterList: function(filter) {
      this.transitionTo({ queryParams: { orderBy: filter }});
      this.refresh();
    }
  }

});
