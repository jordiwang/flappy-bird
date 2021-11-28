// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    position: cc.Vec2 = new cc.Vec2();

    gravity: number = 10.0;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    start() {
        this.node.getPosition(this.position);
    }

    update(dt) {
        if (this.position?.y > -400) {
            this.node.getPosition(this.position);

            this.position.y -= this.gravity;

            this.node.setPosition(this.position);
        }
    }

    onTouchStart(touchEvent: cc.Event.EventTouch) {
        this.node.setScale(1.5, 1.5);
    }

    onTouchMove(touchEvent: cc.Event.EventTouch) {
        let delta = touchEvent.getDelta();

        this.node.getPosition(this.position);

        this.position.x += delta.x;
        this.position.y += delta.y;

        this.node.setPosition(this.position);
    }

    onTouchEnd(touchEvent: cc.Event.EventTouch) {
        this.node.setScale(1, 1);
    }
}
