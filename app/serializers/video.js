import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.paginator) {
      payload = {
        videos: payload.data,
        meta: payload.paginator
      };
      payload.meta.total_pages = payload.meta.num_pages;
      payload.meta.totalPages = payload.meta.num_pages;
    } else {
      // payload.data._id = id;
      // payload.data.id = id;
      payload = {
        videos: payload.data,
      };
    }


    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  serialize() {
    var json = this._super(...arguments);

    if (typeof json.owner === "object") {
      json.owner = json.owner._id;
    }
    if (typeof json.category === "object") {
      json.category = json.category._id;
    }

    delete json.__v;
    delete json.updated_at;
    delete json.created_at;

    return json;
  },
  serializeIntoHash: function(hash, type, record, options) {
    var payload = this.serialize(record, options);
    
    Ember.merge(hash, payload);
  }
});
