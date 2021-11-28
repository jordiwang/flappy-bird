
import { _decorator, Component, Node, Animation, Vec3, Vec2, Touch } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BoxCatController
 * DateTime = Sun Nov 28 2021 17:32:50 GMT+0800 (中国标准时间)
 * Author = pointpeng
 * FileBasename = BoxCatController.ts
 * FileBasenameNoExtension = BoxCatController
 * URL = db://assets/Script/Toca/BoxCatController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('BoxCatController')
export class BoxCatController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    private _animation : Animation;
    private _curPos: Vec3 = new Vec3();
    private _targetPos: Vec3 = new Vec3();
    private _startPos: Vec2 = new Vec2();

    start () {
        this._animation = this.node.getComponent(Animation);
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    onTouchStart(touch: Touch) {
        this._animation.play('BoxCat_1');
        this.node.getPosition(this._curPos);
        this._startPos = touch.getUILocation();
    }

    onTouchMove(touch: Touch) {
        const movePos = touch.getUILocation();
        this._targetPos.x = this._curPos.x + (movePos.x - this._startPos.x);
        this._targetPos.y = this._curPos.y + (movePos.y - this._startPos.y);
    }

    onTouchEnd(touch: Touch) {
        console.log(touch.getUILocation().x);
        this._animation.play('BoxCat_2');
    }

    update(){
        this.node.setPosition(this._targetPos);
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
