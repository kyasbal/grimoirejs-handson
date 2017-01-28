gr(function() {
    const $$ = gr("#main");
    setTimeout(function() {
        $$("#cube").setAttribute("color", "#1b63d6");
    }, 1000);
    $$("scene").append(`<mesh color="red" position="3,0,0" geometry="sphere"/>`);
    $$("camera").addComponent("MouseCameraControl");
});