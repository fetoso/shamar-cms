import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  confirmPassword: DS.attr('string'),
  state: DS.attr('string'),
  city: DS.attr('string'),
  videos: DS.hasMany('video'),
  country: DS.attr('string'),
  phone: DS.attr('string'),
  birthdate: DS.attr('date'),
  shamars: DS.attr('number'),
  avatar: DS.attr(),
  __v: DS.attr('number'),
  verified: DS.attr('boolean'),
  is_admin: DS.attr('boolean'),
  is_banned: DS.attr('boolean'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
});
