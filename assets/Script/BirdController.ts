import { _decorator, Component, Node, systemEvent, SystemEvent, EventTouch, Touch, Vec3, BoxCollider2D, Contact2DType } from 'cc';
const { ccclass, property } = _decorator;

import { MainController, GAME_STATE } from './MainController';
import { AudioController, AUDIO_TYPE } from './AudioController';

/**
 * Predefined variables
 * Name = BirdController
 * DateTime = Thu Nov 25 2021 17:53:03 GMT+0800 (中国标准时间)
 * Author = jordiwang
 * FileBasename = BirdController.ts
 * FileBasenameNoExtension = BirdController
 * URL = db://assets/Script/BirdController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('BirdController')
export class BirdController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    //Speed of bird
    public speed: number = 0;

    private _currentPosition: Vec3 = new Vec3();

    @property({ type: MainController })
    private mainController: MainController = null;

    @property({ type: AudioController })
    private audioController: AudioController = null;

    onLoad() {
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);

        this.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    start() {}

    update(deltaTime: number) {
        if (this.mainController.gameState === GAME_STATE.GS_PLAYING) {
            this.speed -= 0.05;

            this._currentPosition = this.node.getPosition();

            this._currentPosition.y += this.speed;

            this.node.setPosition(this._currentPosition);

            let angle = (this.speed / 2) * 30;
            if (angle <= -30) {
                angle = -30;
            }

            this.node.setRotationFromEuler(new Vec3(0, 0, angle));
        }
    }

    onTouchStart(touch: Touch, event: EventTouch) {
        this.speed = 2;

        this.audioController.playAudio(AUDIO_TYPE.RISE);
    }

    onBeginContact() {
        this.mainController.gameOver();

        this.audioController.playAudio(AUDIO_TYPE.COLLISION);

        setTimeout(() => {
            this.audioController.playAudio(AUDIO_TYPE.END);
        }, 100);
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
