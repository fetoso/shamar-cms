import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
      return this.store.find('video', params.video_id);
    },

    setupController: function(controller, model) {
      controller.set('video', model);
      this.store.findAll('category').then(function(categories) {
        controller.set('categories', categories);
      });
    },

    templateName: 'videos/video',

    actions: {
      updateVideo: function(video) {
        var _this = this;
        console.log(this.store.query('category', { slug: video.get('category') }));
        // video.save().then( function() {
        //   _this.transitionTo('videos');
        // });
      }
    }
});
