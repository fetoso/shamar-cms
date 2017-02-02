import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  original_name: DS.attr('string'),
  status: DS.attr('string'),
  type: DS.attr('string'),
  key: DS.attr('number'),
  shamars: DS.attr('number'),
  owner: DS.attr(),
  approved: DS.attr('boolean'),
  approved_at: DS.attr('date'),
  category: DS.attr(),
  __v: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
});
