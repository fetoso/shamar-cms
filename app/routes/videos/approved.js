import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('video', { status: 'approved' });
  },
  actions: {
    deleteVideo: function(video) {
      if (confirm("Are you sure you want to Delete this item?")) {
        var _this = this;
        video.destroyRecord().then(function() {
          _this.transitionTo('videos.approved');
        });
      }
    },
  }

});
