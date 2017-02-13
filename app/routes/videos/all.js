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
    return this.findPaged('video', params);
    // return this.store.query('video', { orderBy: 'created_at' });
  },
  actions: {
    deleteVideo: function(video) {
      if (confirm("Are you sure you want to Delete this item?")) {
        var _this = this;
        video.destroyRecord().then(function() {
          _this.transitionTo('videos');
        });
      }
    },
    filterList: function(filter) {
      this.transitionTo({ queryParams: { orderBy: filter }});
      this.refresh();
    }
  }

});
