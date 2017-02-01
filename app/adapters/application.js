import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:oauth2',
  host: config.APP.apiURL,
  // serializer: DS.RESTSerializer.extend({
  //   extract: function(loader, json, type, record) {
  //     var newJSON,
  //         root;
  //     root = this.rootForType(type);
  //     newJSON = {};
  //     newJSON[root] = json;
  //     json = newJSON;
  //
  //     this.sideload(loader, type, json, root);
  //     this.extractMeta(loader, type, json);
  //
  //     if (json[root]) {
  //       if (record) {
  //         loader.updateId(record, json[root]);
  //       }
  //       return this.extractRecordRepresentation(loader, type, json[root]);
  //     } else {
  //       return Ember.Logger.warn("Extract requested, but no data given for " + type + ". This may cause weird problems.");
  //     }
  //   },
  // })

});

// export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
//   authorizer: 'authorizer:token' //or authorizer: 'authorizer:jwt'
// });
