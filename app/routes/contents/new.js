import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      title: '',
      body: '',
      video_url: '',
      notify: false,
      is_active: false
    };
  },

  setupController: function(controller, model) {
    controller.set('content', model);
  },

  actions: {
    createContent: function(content) {
      var _this = this;
      this.store.createRecord('content', content).save().then( function() {
        console.log('happening!');
        var t = _this.get('router.url');
        var destination = t.substr(0, t.lastIndexOf("/"));
        console.log(destination);
        $(location).attr('href', '/#' + destination);
        window.location.replace('/#' + destination);
      });
    }
  }
});
