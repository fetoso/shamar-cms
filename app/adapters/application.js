import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
// import config from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:oauth2',
  // host: config.apiHost,
  // namespace: 'api',
	// host: config.APP.apiURL,
	// headers: {
	// 	'X-Requested-With': 'XMLHttpRequest'
	// },
  // ajax: function(url, method, hash) {
  //   hash = hash || {}; // hash may be undefined
  //   hash.crossDomain = true;
  //   hash.xhrFields = {withCredentials: true};
  //   return this._super(url, method, hash);
  // }



});

// export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
//   authorizer: 'authorizer:token' //or authorizer: 'authorizer:jwt'
// });
