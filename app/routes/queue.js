import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

   model: function () {
     return Ember.RSVP.hash({
       unjudged: this.store.query('video', { status: 'pending' })
     });
   },

   setupController: function(controller, models) {
     return controller.setProperties(models);
   },
   session: Ember.inject.service('session'),
   actions: {
     approveVideo: function(video) {
       var _this = this;
      //  video.setProperties({ 'status': 'approved', 'approved': true, 'approved_at': true });
       video.set('status', 'approved');
       video.set('approved', true);
       video.set('approved_at', new Date());
       console.log(video.get('status'));
       video.save().then(function() {
         _this.refresh();
       });
     },
     rejectVideo: function(video) {
       var _this = this;
      //  video.setProperties({ 'status': 'rejected', 'approved': false });
       video.set('status', 'rejected');
       video.set('approved', false);
       console.log(video.get('status'));
       video.save().then(function() {
         _this.refresh();
       });
     }
   }

});
