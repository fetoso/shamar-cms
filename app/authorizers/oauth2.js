import Ember from 'ember';
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';
console.log('authorizer')
const { isEmpty } = Ember;

export default OAuth2Bearer.extend({
  authorize(data, block) {
    const { token }  = data.data;
    if (!isEmpty(token)) {
      block('Authorization', `JWT ${token}`);
    }
  }
});
