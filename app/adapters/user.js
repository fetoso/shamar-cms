import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:oauth2',
  host: config.APP.apiURL,
  urlForCreateRecord() {
    return `${config.APP.apiURL}/${this.namespace}/accounts/signup`;
  },
  handleResponse: function(status, headers, payload){
    // console.log('errors:', status, headers, payload);
    if(status === 400 && payload.errors){
      alert('There was an error.');
      return new DS.InvalidError(payload.errors);
    }
    return this._super(...arguments);
  }
});
