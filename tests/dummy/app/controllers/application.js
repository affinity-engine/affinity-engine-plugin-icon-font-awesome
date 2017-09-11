import Ember from 'ember';

export default Ember.Controller.extend({
  single: {
    type: 'camera'
  },

  stacked: [{
    type: 'square-o',
    stack: 2,
    size: 4
  }, {
    type: 'twitter',
    stack: 1,
    inverse: true
  }],

  sized: {
    type: 'camera',
    size: 3
  },

  spinner: {
    type: 'spinner',
    spin: true
  },

  pulser: {
    type: 'spinner',
    pulse: true
  },

  rotated: {
    type: 'shield',
    rotate: 90
  },

  flipped: {
    type: 'shield',
    flip: 'vertical'
  }
})
