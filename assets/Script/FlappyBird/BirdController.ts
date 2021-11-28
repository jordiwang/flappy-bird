// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { MainController, GAME_STATE } from './MainController';
import { AudioController, SOUND_TYPE } from './AudioController';

const { ccclass, property } = cc._decorator;

@ccclass
export default class BirdController extends cc.Component {
    @property(MainController)
    mainController: MainController = null;

    @property(AudioController)
    audioController: AudioController = null;

    //Speed of bird
    speed: number = 0;

    rigidBody: cc.RigidBody = null;

    onLoad() {
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    start() {}

    update(dt: number) {
        if (this.mainController.gameState === GAME_STATE.GAME_PLAYING) {
            this.speed -= 0.05;

            let position = this.node.getPosition();

            position.y += this.speed;

            let angle = (this.speed / 2) * 30;

            if (angle >= 30) {
                angle = 30;
            }

            this.node.angle = angle;
            this.node.setPosition(position);
        }
    }

    onTouchStart(event: cc.Event.EventTouch) {
        this.speed = 2;

        this.audioController.playSound(SOUND_TYPE.E_Sound_Fly);
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.tag === 0) {
            this.speed = 0;

            this.mainController.gameOver();
        }
        // collider tag is 1, that means the bird cross a pipe, then add score
        else if (other.tag === 1) {
            this.mainController.addScore();
        }
    }
}
