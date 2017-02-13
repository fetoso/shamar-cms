import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, RouteMixin, {

   model: function (params) {
     params.orderBy = '-created_at';
     params.status = 'pending';
     return Ember.RSVP.hash({
       unjudged: this.findPaged('video', params) // this.store.query('video', { status: 'pending', orderBy: 'created_at' })
     });
   },

   setupController: function(controller, models) {
     controller.set('content', models.unjudged.get('meta'));
     controller.set('meta', models.unjudged.get('meta'));
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
