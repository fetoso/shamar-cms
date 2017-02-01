import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  notify: DS.attr('boolean'),
  is_active: DS.attr('boolean'),
  video_url: DS.attr('string'),
});
