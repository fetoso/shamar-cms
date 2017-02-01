import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      categories: payload.data,
      // pagination: payload.pagination
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  serialize(snapshot, options) {
    var json = this._super(...arguments);
    
    delete json.__v;
    delete json.updated_at;
    delete json.created_at;
    if(json.videos) {
      delete json.videos;
    }

    return json;
  },
  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  }
});