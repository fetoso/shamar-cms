import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:oauth2',
  host: config.APP.apiURL,
  handleResponse: function(status, headers, payload){
    if(status === 400 && payload.errors){
      var fields = Object.keys(payload.errors);
      fields.forEach(function(field) {
        $('#' + field).attr('style', 'border:1px solid #ffad1b;');
      });
      alert('There was an error.');
      return new DS.InvalidError(payload.errors);
    }
    return this._super(...arguments);
  }
  // pathForType: function(type) {
  //   console.log(type);
  //   return type;
  // }
});

// export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
//   authorizer: 'authorizer:token' //or authorizer: 'authorizer:jwt'
// });
