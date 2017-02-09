import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:oauth2',
  host: config.APP.apiURL,
  urlForCreateRecord(modelName, snapshot) {
    return `${config.APP.apiURL}/${this.namespace}/accounts/signup`;
  }
});
