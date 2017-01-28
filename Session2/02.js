const Quaternion = gr.lib.math.Quaternion;
gr.register(function() {
    gr.registerComponent("Rotate", {
        attributes: {
            speed: {
                default: 1,
                converter: "Number"
            },
            axis: {
                default: [0, 1, 0],
                converter: "Vector3"
            }
        },
        $awake: function() {
            this.__bindAttributes();
            this._transform = this.node.getComponent("Transform");
        },
        $mount: function() {},
        $update: function() {
            this._transform.localRotation = Quaternion.multiply(
                Quaternion.angleAxis(this.speed * 0.01, this.axis), this._transform.localRotation);
        }
    });
});