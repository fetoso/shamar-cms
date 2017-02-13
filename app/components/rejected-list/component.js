import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteVideo: function(video) {
      this.sendAction('action', video);
    },
    filterList: function(filter) {
      this.sendAction('filter', filter);
    }
  }
});
