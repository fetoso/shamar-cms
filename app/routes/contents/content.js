import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('content', params.content_id);
  },

  setupController: function(controller, model) {
    controller.set('content', model);
  },

  actions: {
    updateContent: function(content) {
      var _this = this;
      content.save().then( function() {
        _this.transitionTo('contents');
      });
    }
  }

});
