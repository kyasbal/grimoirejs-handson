// Rotate Component
const {Vector3} = gr.lib.math;

gr.registerComponent('Rotate', {
  attributes: {
    speed: {
      default: '0,0,0',
      converter: 'Vector3',
    },
  },
  $mount: function() {
    this.phi = Vector3.Zero;
  },
  $update: function() {
    this.phi = this.phi.addWith(this.getAttribute('speed'));
    this.node.setAttribute('rotation', this.phi.X + ',' + this.phi.Y + ',' + this.phi.Z);
  },
});

// when dom loaded
document.addEventListener('DOMContentLoaded', () => {
  // get div.bound
  Array.from(document.querySelectorAll('.bound')).forEach((elm, i) => {
    // when click
    elm.addEventListener('click', (e) => {
      const $$ = gr('#canvas');
      $$('.big mesh').setAttribute('position', '10,0,0');
      $$('.big').setAttribute('scale', '1,1,1');
      $$('.big').setAttribute('class', '');
      $$(`#mesh${i} mesh`).setAttribute('position', '0,0,0');
      $$(`#mesh${i}`).setAttribute('scale', '3,3,3');
      $$(`#mesh${i}`).setAttribute('class', 'big');
    });
  });
});
