import Ember from 'ember';
import layout from '../templates/components/affinity-engine-plugin-icon-font-awesome';

const {
  Component,
  computed,
  get,
  typeOf
} = Ember;
export default Component.extend({
  layout,
  tagName: '',

  configuration: computed('icons', 'icon', {
    get() {
      return get(this, 'icons') || get(this, 'icon');
    }
  }),

  stacked: computed('configuration', {
    get() {
      return typeOf(get(this, 'configuration')) === 'array';
    }
  }),

  firstIcon: computed('configuration', {
    get() {
      return get(this, 'configuration')[0];
    }
  }),

  stackSize: computed('firstIcon.size', {
    get() {
      let size = get(this, 'firstIcon.size') || 1;
      size = size === 1 ? '1g' : `${size}x`;

      return `fa-${size}`;
    }
  })
});
