import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  is_active: DS.attr('boolean'),
  __v: DS.attr('number'),
  videos: DS.hasMany('video'),
  updated_at: DS.attr('date'),
  created_at: DS.attr('date'),
});
