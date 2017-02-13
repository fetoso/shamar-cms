import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  queryParams: {
    orderBy: '-created_at',
  },
  model: function(params) {
    if(!params.orderBy) {
      params.orderBy = '-created_at';
    }
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
    filterList: function(filter) {
      this.transitionTo({ queryParams: { orderBy: filter }});
      this.refresh();
    }
  }

});
