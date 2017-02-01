import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:oauth2',
  host: config.APP.apiURL,

});

// export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
//   authorizer: 'authorizer:token' //or authorizer: 'authorizer:jwt'
// });
