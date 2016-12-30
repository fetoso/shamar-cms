import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('number'),
  video_url: DS.attr('string'),
  shams: DS.attr('number'),
  user_id: DS.attr('number'),
});
