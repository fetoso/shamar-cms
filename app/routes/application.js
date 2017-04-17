import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  actions: {
    // error: function(error, transition) {
    //   // handle the error
    //   alert(error.message);
    // },
    logout: function() {
      if (confirm("Are you sure you want to Logout?")) {
        var _this = this;
        this.get('session').invalidate().then(function() {
            _this.transitionTo('login');
        });
      }

    },
    // openModal: function(item) {
    //     return this.render('videos.preview', {
    //       into: 'application',
    //       outlet: 'modal'
    //     });
    //   }
    }
});
