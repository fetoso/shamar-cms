import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      videos: payload.data,
      // pagination: payload.pagination
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  serialize() {
    var json = this._super(...arguments);

    if (typeof json.owner === "object") {
      json.owner = json.owner._id
    }
    if (typeof json.category === "object") {
      json.category = json.category._id
    }

    delete json.__v;
    delete json.updated_at;
    delete json.created_at;

    return json;
  },
  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  }
});
