import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  actions: {
    logout: function() {
      var _this = this;
      this.get('session').invalidate().then(function() {
          _this.transitionTo('login');
      });
    },
    // openModal: function(item) {
    //     return this.render('videos.preview', {
    //       into: 'application',
    //       outlet: 'modal'
    //     });
    //   }
    }
});
