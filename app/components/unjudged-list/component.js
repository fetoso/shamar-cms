import Ember from 'ember';
// import momentComputed from 'ember-moment/computeds/moment';
// import fromNow from 'ember-moment/computeds/from-now';

export default Ember.Component.extend({
  actions: {
    approveVideo: function(video) {
      this.sendAction('approve', video);
    },
    rejectVideo: function(video) {
      this.sendAction('reject', video);
    }
  },
  // computedFromNow: fromNow(momentComputed('12-25-1995', 'MM-DD-YYYY'), false), // -> 2 years ago
});
