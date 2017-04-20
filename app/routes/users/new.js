import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      account_type: '',
      password: '',
      confirmPassword: ''
    };
  },

  setupController: function(controller, model) {
    controller.set('user', model);
  },

  actions: {
    createUser: function(user) {
      console.log('user', user);
      var _this = this;
      // _this.store.get('users').push(user);
      // _this.transitionTo('users');
      this.store.createRecord('user', user).save().then( function(response) {
        $('tbody').prepend(' \
          <tr> \
            <td>' + user.first_name + ' ' + user.last_name + '</td> \
            <td class="hidden-xs">' + user.email + '</td> \
            <td class="hidden-xs">' + user.shamars + '</td> \
            <td class="hidden-xs">' + user.is_admin + '</td> \
            <td> \
              <div class="bs-component table-commands"> \
                <div class="btn-group btn-group-justified"> \
                  <a href="/#/users/' + response.id + '" class="btn btn-default send ember-view">EDIT</a> \
                  <a href="#" class="btn btn-default cancel" >DELETE</a> \
                </div> \
              </div> \
            </td> \
          </tr> \
        ');
        _this.transitionTo('users');
      });
    }
  }
});
