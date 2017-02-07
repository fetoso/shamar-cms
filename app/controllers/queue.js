import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["page"],

  perPage: Ember.computed.alias("meta.limit"),
  total_pages: Ember.computed.alias("meta.num_pages"),

});
