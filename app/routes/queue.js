import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

   model: function () {
     return Ember.RSVP.hash({
       unjudged: this.store.query('video', { status: -1 })
     });
   },

   setupController: function(controller, models) {
     return controller.setProperties(models);
   },
   session: Ember.inject.service('session'),
   actions: {
     approveVideo: function(video) {
       var _this = this;
       video.set('status', 1);
       video.save().then(function() {
         _this.refresh();
       });
     },
     rejectVideo: function(video) {
       var _this = this;
       video.set('status', 0);
       video.save().then(function() {
         _this.refresh();
       });
     }
   }

});
