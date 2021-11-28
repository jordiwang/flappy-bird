
import { _decorator, Component, Vec3, Node, Touch } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TocaBgController
 * DateTime = Fri Nov 26 2021 16:28:47 GMT+0800 (中国标准时间)
 * Author = pointpeng
 * FileBasename = TocaBgController.ts
 * FileBasenameNoExtension = TocaBgController
 * URL = db://assets/Script/Toca/TocaBgController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('TocaBgController')
export class TocaBgController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    private _curPos: Vec3 = new Vec3();

    private _targetPos: Vec3 = new Vec3();

    private _startX: number;
    private _deltaX: number;
    private _outerWidth: number = 512.5;

    start () {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchStart(touch: Touch) {
        this.node.getPosition(this._curPos);
        this._deltaX = 0;
        console.log('startTouch');
        this._startX = touch.getUILocation().x;

    }

    onTouchMove(touch: Touch){
        this._deltaX = touch.getUILocation().x - this._startX;
        let targetX = this._curPos.x + this._deltaX;
        if (targetX > this._outerWidth){
            targetX = this._outerWidth;
        } else if (targetX < -this._outerWidth) {
            targetX = -this._outerWidth;
        }
        this._targetPos.x = targetX;
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
