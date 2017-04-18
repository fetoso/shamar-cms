import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return { name: '', slug: '' };
  },

  setupController: function(controller, model) {
    controller.set('category', model);
  },

  actions: {
    createCategory: function(category) {
      var _this = this;
      this.store.createRecord('category', category).save().then( function() {
        var t = _this.get('router.url');
        var destination = t.substr(0, t.lastIndexOf("/"));
        window.location.replace('/#' + destination);
      });
    }
  }
});
