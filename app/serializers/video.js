import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      videos: payload.data,
      // pagination: payload.pagination
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
