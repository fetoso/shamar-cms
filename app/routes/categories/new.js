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
      this.store.createRecord('category', category).save().then( function(response) {
        $('tbody').prepend(' \
          <tr> \
            <!-- <td class="hidden-xs">' + response.id + '</td> --> \
            <td>' + item.name + '</td> \
            <td class="hidden-xs">' + item.is_active + '</td> \
            <td> \
              <div class="bs-component table-commands"> \
                <div class="btn-group btn-group-justified"> \
                  <a href="/#/caregories/' + response.id + '" class="btn btn-default send ember-view">EDIT</a> \
                  <!-- <a href="#" class="btn btn-default cancel">DELETE</a> --> \
                </div> \
              </div> \
            </td> \
          </tr>\
        ');
        _this.transitionTo('categories');
      });
    }
  }
});
