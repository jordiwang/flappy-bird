import { _decorator, Component, Sprite, Vec3, Prefab, Node, instantiate, Button, SystemEvent } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MainController
 * DateTime = Thu Nov 25 2021 17:00:21 GMT+0800 (中国标准时间)
 * Author = jordiwang
 * FileBasename = MainController.ts
 * FileBasenameNoExtension = MainController
 * URL = db://assets/Script/MainController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

export enum GAME_STATE {
    GS_READY,
    GS_INIT,
    GS_PLAYING,
    GS_END,
}

const MIN_Y = -120;
const MAX_Y = 120;

@ccclass('MainController')
export class MainController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property({ type: Sprite })
    public bgList: Sprite[] = [null, null];

    @property({ type: Sprite })
    public titleSprite: Sprite = null;

    @property({ type: Sprite })
    public gameOverSprite: Sprite = null;

    @property({ type: Prefab })
    public pipeGroupPrefab: Prefab = null;

    @property({ type: Node })
    public pipeContainerNode: Node = null;

    @property({ type: Button })
    public startButton: Button = null;

    @property({ type: Sprite })
    public birdSprite: Sprite = null;

    // 背景坐标
    private _bgPosition: Vec3 = new Vec3();

    // 障碍列表
    private _pipeList: Node[] = [null, null, null];

    // 游戏状态
    private _gameState: GAME_STATE = GAME_STATE.GS_READY;

    set gameState(value: GAME_STATE) {
        this._gameState = value;

        switch (value) {
            case GAME_STATE.GS_INIT:
                this.init();
                break;
            case GAME_STATE.GS_PLAYING:
                break;
            case GAME_STATE.GS_END:
                break;
        }
    }

    get gameState() {
        return this._gameState;
    }

    onLoad() {
        this.gameState = GAME_STATE.GS_INIT;
    }

    start() {}

    update(deltaTime: number) {
        if (this.gameState === GAME_STATE.GS_PLAYING) {
            for (let i = 0; i < this.bgList.length; i++) {
                const bg = this.bgList[i];

                this._bgPosition = bg.node.getPosition();
                this._bgPosition.x -= 1;

                if (this._bgPosition.x <= -288) {
                    this._bgPosition.x = 288;
                }

                bg.node.setPosition(this._bgPosition);
            }

            // move pipes
            for (let i = 0; i < this._pipeList.length; i++) {
                const pipeGroup = this._pipeList[i];

                const pipePosition = pipeGroup.getPosition();

                pipePosition.x -= 1.0;

                if (pipePosition.x <= -580) {
                    pipePosition.x = 580;

                    pipePosition.y = MIN_Y + Math.random() * (MAX_Y - MIN_Y);
                }

                pipeGroup.setPosition(pipePosition);
            }
        }
    }

    init() {
        console.log('---- init ----');

        this.initCollision();
        this.gengeratePipe();

        this.titleSprite.node.active = true;

        this.gameOverSprite.node.active = false;

        this.startButton.node.on(SystemEvent.EventType.TOUCH_START, this.gameStart, this);
    }

    initCollision() {
        // //open Collision System
        // const collisionManager = director.getCollisionManager();
        // collisionManager.enabled = true;
        // //open debug draw when you debug the game
        // //do not forget to close when you ship the game
        // collisionManager.enabledDebugDraw = true;

        console.log('---- initCollision ----');
    }

    gengeratePipe() {
        for (let i = 0; i < this._pipeList.length; i++) {
            let pipeGroup = instantiate(this.pipeGroupPrefab);

            this._pipeList[i] = pipeGroup;

            this.pipeContainerNode.addChild(pipeGroup);

            let pipePosition = pipeGroup.getPosition();

            pipePosition.x = 170 + 200 * i;

            pipePosition.y = MIN_Y + Math.random() * (MAX_Y - MIN_Y);

            pipeGroup.setPosition(pipePosition);
        }
    }

    /**
     * gameStart
     */
    public gameStart() {
        this.gameState = GAME_STATE.GS_PLAYING;

        this.startButton.node.active = false;

        this.gameOverSprite.node.active = false;

        this.titleSprite.node.active = false;

        let birdPosition = this.birdSprite.node.getPosition();

        birdPosition.y = 0;

        this.birdSprite.node.setPosition(birdPosition);
    }

    /**
     * gameOver
     */
    public gameOver() {
        this.gameOverSprite.node.active = true;

        this.startButton.node.active = true;

        this.gameState = GAME_STATE.GS_END;
    }
}
