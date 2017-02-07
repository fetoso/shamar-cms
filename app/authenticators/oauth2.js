import Ember from 'ember';
import config from '../config/environment';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  identificationField: 'email',
  serverTokenEndpoint: config.APP.apiURL + '/api/accounts/login',
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject){
      if(!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate: function(email, password) {

    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.serverTokenEndpoint,
        type: 'POST',
        crossDomain: true,
        data: JSON.stringify({
          email:    email,
          password: password
        }),
        contentType: 'application/json'
        // dataType: 'json'
      }).then(function(response){
        Ember.run(function(){
          resolve({
            token: response.data.token
          });
        });
      }, function(xhr) {
        var response = xhr.responseText;
        Ember.run(function(){
          reject(response);
        });
      });
    });
  },
  invalidate: function() {
    return Ember.RSVP.resolve();
  },
  authorizationPrefix: 'JWT ',
  authorizationHeaderName: 'Authorization',

});
