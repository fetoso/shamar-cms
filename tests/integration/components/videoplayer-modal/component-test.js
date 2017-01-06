import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('videoplayer-modal', 'Integration | Component | videoplayer modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{videoplayer-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#videoplayer-modal}}
      template block text
    {{/videoplayer-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
