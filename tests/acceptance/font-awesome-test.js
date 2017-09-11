import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { $hook } from 'ember-hook';

moduleForAcceptance('Acceptance | font awesome');

test('visiting /font-awesome', function(assert) {
  assert.expect(8);

  visit('/');

  andThen(function() {
    assert.ok($hook('single').children('i').hasClass('fa-camera'), 'applies type as fa- class');
    assert.ok($hook('stacked').find('i').length === 2, 'can stack multiple icons');
    assert.ok($hook('stacked').children('span').hasClass('fa-4x'), 'applies stack size');
    assert.ok($hook('sized').children('i').hasClass('fa-3x'), 'applies fa-size');
    assert.ok($hook('spinner').children('i').hasClass('fa-spin'), 'applies fa-spin');
    assert.ok($hook('pulser').children('i').hasClass('fa-pulse'), 'applies fa-pulse');
    assert.ok($hook('rotated').children('i').hasClass('fa-rotate-90'), 'applies fa-rotate-');
    assert.ok($hook('flipped').children('i').hasClass('fa-flip-vertical'), 'applies fa-flip-');
  });
});
