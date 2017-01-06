import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  city: DS.attr('string'),
  country: DS.attr('string'),
  phone: DS.attr('string'),
  birthdate: DS.attr('date'),
  state: DS.attr('number'),
  role: DS.attr('number'),
});
