import Ember from 'ember';
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

const { isEmpty } = Ember;

export default OAuth2PasswordGrantAuthenticator.extend({
  authorize(data, block) {
    const { token }  = data.data;
    if (!isEmpty(token)) {
      block('Authorization', `JWT ${token}`);
    }
  }
});
