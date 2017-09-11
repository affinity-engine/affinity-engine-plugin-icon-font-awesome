import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  tagName: 'i',
  classNames: ['fa'],
  classNameBindings: ['formattedFixedWidth', 'formattedFlip', 'formattedInverse', 'formattedPulse', 'formattedRotate', 'formattedSize', 'formattedSpin', 'formattedStack', 'formattedType'],

  formattedFixedWidth: computed('icon.fixedWidth', {
    get() {
      return get(this, 'icon.fixedWidth') ? 'fa-fw' : '';
    }
  }),

  formattedFlip: computed('icon.flip', {
    get() {
      const flip = get(this, 'icon.flip');

      return flip ? `fa-flip-${flip}` : '';
    }
  }),

  formattedInverse: computed('icon.inverse', {
    get() {
      return get(this, 'icon.inverse') ? 'fa-inverse' : '';
    }
  }),

  formattedPulse: computed('icon.pulse', {
    get() {
      return get(this, 'icon.pulse') ? 'fa-pulse' : '';
    }
  }),

  formattedRotate: computed('icon.rotate', {
    get() {
      const rotate = get(this, 'icon.rotate');

      return rotate ? `fa-rotate-${rotate}` : '';
    }
  }),

  formattedSize: computed('icon.size', {
    get() {
      let size = get(this, 'icon.size') || 1;
      size = size === 1 ? '1g' : `${size}x`;

      return `fa-${size}`;
    }
  }),

  formattedSpin: computed('icon.spin', {
    get() {
      return get(this, 'icon.spin') ? 'fa-spin' : '';
    }
  }),

  formattedStack: computed('icon.stack', {
    get() {
      const stack = get(this, 'icon.stack');

      return stack ? `fa-stack-${stack}x` : '';
    }
  }),

  formattedType: computed('icon.type', {
    get() {
      return `fa-${get(this, 'icon.type')}`;
    }
  })
});
