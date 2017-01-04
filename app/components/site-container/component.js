import Ember from 'ember';

export default Ember.Component.extend({
  // session: Ember.inject.service(),
  //   actions: {
  //       logout: function() {
  //         console.log('hey');
  //           var _this = this;
  //           this.get('session').invalidate().then(function() {
  //               _this.transitionTo('login');
  //           });
  //       }
  //   }
  actions: {
        logout: function() {
            this.sendAction('action');
        }
    }
});
