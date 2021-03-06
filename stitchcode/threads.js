Process.prototype.reportMouseX = function () {
    var stage, world;
    if (this.homeContext.receiver) {
        stage = this.homeContext.receiver.parentThatIsA(StageMorph);
        if (stage) {
            world = stage.world();
            if (world) {
				var factor = stage.renderer.isParallelProjection ? 65 / stage.camera.zoomFactor : stage.controls.object.position.length() / 10;
                return ((world.hand.position().x - stage.center().x)) / stage.camera.zoomFactor  * 2 + stage.controls.center.x;
            }
        }
    }
    return 0;
};

Process.prototype.reportMouseY = function () {
    var stage, world;
    if (this.homeContext.receiver) {
        stage = this.homeContext.receiver.parentThatIsA(StageMorph);
        if (stage) {
            world = stage.world();
            if (world) {
				var factor = stage.renderer.isParallelProjection ? 65 / stage.camera.zoomFactor : stage.controls.object.position.length() / 10;
                return ((stage.center().y - world.hand.position().y)) / stage.camera.zoomFactor * 2 + stage.controls.center.y;
            }
        }
    }
    return 0;
};
