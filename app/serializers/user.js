import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log(requestType, id);
    if (payload.paginator) {
      payload = {
        users: payload.data,
        meta: payload.paginator
      };
      payload.meta.total_pages = payload.meta.num_pages;
      payload.meta.totalPages = payload.meta.num_pages;
      payload.meta.perPage = payload.meta.limit;
    } else {
      payload.data._id = id;
      payload.data.id = id;
      payload = {
        users: payload.data,
      };
    }


    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  serialize() {
    var json = this._super(...arguments);

    delete json.__v;
    delete json.updated_at;
    delete json.created_at;
    delete json.password;

    // temp
    delete json.state;
    delete json.country;
    //

    if(json.videos) {
      delete json.videos;
    }

    return json;
  },
  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  }
});
