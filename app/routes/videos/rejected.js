import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function(params) {
    params.orderBy = 'approved_at';
    params.status = 'rejected';
    return this.findPaged('video', params);
    // return this.store.query('video', { status: 'rejected', orderBy: 'updated_at' });
  },
  actions: {
    deleteVideo: function(video) {
      if (confirm("Are you sure you want to Delete this item?")) {
        var _this = this;
        video.destroyRecord().then(function() {
          _this.transitionTo('videos.rejected');
        });
      }
    },
  }

});
