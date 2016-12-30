import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
     return Ember.RSVP.hash({
       // unjudged: this.store.find('video')
       unjudged: [
         {
           id: 0,
           name: 'El video mas cool',
           status: -1,
           video_url: 'http://video.webmfiles.org/big-buck-bunny_trailer.webm',
           shams: 0,
           user_id: 0,
         },
         {
           id:1,
           name: 'Otro video',
           status: -1,
           video_url: 'http://video.webmfiles.org/big-buck-bunny_trailer.webm',
           shams: 0,
           user_id: 2,
         },
       ]
     });
   },

   setupController: function(controller, models) {
     return controller.setProperties(models);
   }

});
