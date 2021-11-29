// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    mainCamera: cc.Camera = null;

    @property(cc.Sprite)
    background: cc.Sprite = null;

    @property(cc.Button)
    flappyButton: cc.Button = null;

    onLoad() {
        this.init();
    }

    start() { }

    // update (dt) {}

    init() {
        cc.director.getPhysicsManager().enabled = true;

        this.background.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.background.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

        this.flappyButton.node.on(cc.Node.EventType.TOUCH_END, this.goFlappy, this)
    }

    onTouchMove(touchEvent: cc.Event.EventTouch) {
        let delta = touchEvent.getDelta();

        let position = this.mainCamera.node.getPosition();

        position.x -= delta.x;
        position.y -= delta.y;

        this.mainCamera.node.setPosition(position);
    }

    onTouchEnd() { }

    goFlappy() {
        cc.director.loadScene('Main')
    }
}
