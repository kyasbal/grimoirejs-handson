gr.registerComponent('Rotate', {
    attributes: {
        speed: {
            default: '1',
            converter: 'Number',
        },
    },
    $mount: function() {
        this.phi = 0;
    },
    $update: function() {
        this.phi += this.getAttribute('speed');
        this.node.setAttribute('rotation', this.phi + ',' + this.phi + ',' + this.phi);
    },
});


// const Quaternion = gr.lib.math.Quaternion;
// gr.register(function() {
//     gr.registerComponent("Rotate", {
//         attributes: {
//             speed: {
//                 default: 1,
//                 converter: "Number"
//             },
//             axis: {
//                 default: [0, 1, 0],
//                 converter: "Vector3"
//             }
//         },
//         $mount: function() {
//             this.__bindAttributes();
//             this._transform = this.node.getComponent("Transform");
//         },
//         $update: function() {
//             this._transform.localRotation = Quaternion.multiply(
//                 Quaternion.angleAxis(this.speed * 0.01, this.axis), this._transform.localRotation);
//         }
//     });
// });