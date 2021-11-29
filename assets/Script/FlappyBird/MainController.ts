// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { AudioController, SOUND_TYPE } from './AudioController';

const { ccclass, property } = cc._decorator;

const MIN_Y = -120;
const MAX_Y = 120;

export enum GAME_STATE {
    GAME_INIT,
    GAME_PLAYING,
    GAME_END,
}

@ccclass
export class MainController extends cc.Component {
    @property(cc.Sprite)
    bgList: cc.Sprite[] = [null, null];

    @property(cc.Node)
    pipeContainer: cc.Node = null;

    @property(cc.Prefab)
    pipePrefab: cc.Prefab = null;

    @property(cc.Sprite)
    gameOverSprite: cc.Sprite = null;

    @property(cc.Sprite)
    gameTitleSprite: cc.Sprite = null;

    @property(cc.Button)
    buttonStart: cc.Button = null;

    @property(AudioController)
    audioController: AudioController = null;

    @property(cc.Label)
    labelScore: cc.Label = null;

    @property(cc.Button)
    tocaButton: cc.Button = null;

    @property(cc.Button)
    spineButton: cc.Button = null;


    @property(cc.Button)
    faceButton: cc.Button = null;

    pipeList: cc.Node[] = [null, null, null];

    gameState: GAME_STATE = GAME_STATE.GAME_INIT;

    gameScore: number;

    onLoad() {
        this.init();
    }

    start() {
        for (let i = 0; i < this.pipeList.length; i++) {
            const pipe = cc.instantiate(this.pipePrefab);

            this.pipeList[i] = pipe;

            pipe.setPosition(170 + 200 * i, MIN_Y + Math.random() * (MAX_Y - MIN_Y));

            this.pipeContainer.addChild(pipe);
        }
    }

    update(dt: number) {
        if (this.gameState === GAME_STATE.GAME_PLAYING) {
            // move the background node
            for (let i = 0; i < this.bgList.length; i++) {
                let bgPositoin = this.bgList[i].node.getPosition();

                bgPositoin.x -= 1.0;

                if (bgPositoin.x <= -288) {
                    bgPositoin.x = 288;
                }

                this.bgList[i].node.setPosition(bgPositoin);
            }

            // move pipes
            for (let i = 0; i < this.pipeList.length; i++) {
                let position = this.pipeList[i].getPosition();

                position.x -= 1.0;

                if (position.x <= -170) {
                    position.x = 430;

                    position.y = MIN_Y + Math.random() * (MAX_Y - MIN_Y);
                }

                this.pipeList[i].setPosition(position);
            }
        }
    }

    init() {
        cc.director.getCollisionManager().enabled = true;

        this.audioController.playMusic();

        this.gameState = GAME_STATE.GAME_INIT;

        this.gameTitleSprite.node.active = true;

        this.gameOverSprite.node.active = false;

        this.buttonStart.node.active = true;

        this.tocaButton.node.active = false;

        this.gameScore = 0;
        this.labelScore.string = this.gameScore.toString();

        this.buttonStart.node.on(cc.Node.EventType.TOUCH_END, this.gameStart, this);

        this.tocaButton.node.on(cc.Node.EventType.TOUCH_END, this.goToca, this);

        this.faceButton.node.on(cc.Node.EventType.TOUCH_END, this.goFace, this)

        this.spineButton.node.on(cc.Node.EventType.TOUCH_END, this.getSpine, this)
    }

    gameStart() {
        this.gameState = GAME_STATE.GAME_PLAYING;

        this.gameTitleSprite.node.active = false;

        this.buttonStart.node.active = false;
    }

    gameOver() {
        this.gameState = GAME_STATE.GAME_END;

        this.audioController.playSound(SOUND_TYPE.E_Sound_Die);

        this.gameOverSprite.node.active = true;

        this.tocaButton.node.active = true;

        this.buttonStart.node.active = true;
    }

    addScore() {
        this.gameScore += 1;
        this.labelScore.string = this.gameScore.toString();
    }

    goToca() {
        this.audioController.stopMusic();
        cc.director.loadScene('Toca');
    }


    goFace() {
        this.audioController.stopMusic();
        cc.director.loadScene('TocaFace');
    }

    getSpine() {
        this.audioController.stopMusic();
        cc.director.loadScene('SpineChangeDress');
    }

}
