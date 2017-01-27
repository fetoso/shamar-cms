import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  state: DS.attr('string'),
  city: DS.attr('string'),
  videos: DS.hasMany('video'),
  country: DS.attr('string'),
  phone: DS.attr('string'),
  birthdate: DS.attr('date'),
  __v: DS.attr('number'),
  verified: DS.attr('boolean'),
  is_admin: DS.attr('boolean'),
  is_banned: DS.attr('boolean'),
});
