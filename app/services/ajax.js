import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';

export default AjaxService.extend({
  namespace: 'api',
  host: config.APP.apiURL,
  // session: Ember.inject.service('session'),
  // headers: Ember.computed('session', {
  //   get() {
  //     let headers = {};
  //     const authToken = this.get('session.authToken');
  //     if (authToken) {
  //       headers['auth-token'] = authToken;
  //     }
  //     return headers;
  //   }
  // })
});
