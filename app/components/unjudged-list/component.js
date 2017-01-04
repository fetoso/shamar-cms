import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    approveVideo: function(video) {
      this.sendAction('approve', video);
    },
    rejectVideo: function(video) {
      this.sendAction('reject', video);
    }
  }
});
