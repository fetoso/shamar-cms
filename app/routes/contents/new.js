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
      this.store.createRecord('content', content).save().then( function( response) {

        console.log('pretty please!', response.id);
        // var t = _this.get('router.url');
        // var destination = t.substr(0, t.lastIndexOf("/"));
        $('tbody').prepend(' \
          <tr> \
            <!-- <td class="hidden-xs">' + response.id + '</td> --> \
            <td><a href="#" data-toggle="modal" data-target="#modal' + content.id + '">' + content.title +'</a></td> \
            <td class="hidden-xs">' + content.notify + '</td> \
            <td class="hidden-xs">' + content.is_active + '</td> \
            <td> \
              <div class="bs-component table-commands"> \
                <div class="btn-group btn-group-justified"> \
                  <a href="/#/contents/' + response.id + '" class="btn btn-default send ember-view">EDIT</a> \
                  <!-- <a href="#" class="btn btn-default cancel" {{action "deleteContent" content}}>DELETE</a> --> \
                </div> \
              </div> \
            </td> \
          </tr>\
        ');
        // window.location.replace('/#/contents');

        _this.transitionTo('contents');
      });
    }
  }
});
