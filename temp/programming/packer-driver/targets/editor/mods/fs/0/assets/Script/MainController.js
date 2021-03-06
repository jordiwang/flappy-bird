System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Sprite, Vec3, Prefab, Node, instantiate, Button, SystemEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, GAME_STATE, MIN_Y, MAX_Y, MainController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export("GAME_STATE", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Button = _cc.Button;
      SystemEvent = _cc.SystemEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c747dwnZiVM8LOrUtWeX59b", "MainController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MainController
       * DateTime = Thu Nov 25 2021 17:00:21 GMT+0800 (??????????????????)
       * Author = jordiwang
       * FileBasename = MainController.ts
       * FileBasenameNoExtension = MainController
       * URL = db://assets/Script/MainController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      (function (GAME_STATE) {
        GAME_STATE[GAME_STATE["GS_READY"] = 0] = "GS_READY";
        GAME_STATE[GAME_STATE["GS_INIT"] = 1] = "GS_INIT";
        GAME_STATE[GAME_STATE["GS_PLAYING"] = 2] = "GS_PLAYING";
        GAME_STATE[GAME_STATE["GS_END"] = 3] = "GS_END";
      })(GAME_STATE || _export("GAME_STATE", GAME_STATE = {}));

      MIN_Y = -120;
      MAX_Y = 120;

      _export("MainController", MainController = (_dec = ccclass('MainController'), _dec2 = property({
        type: Sprite
      }), _dec3 = property({
        type: Sprite
      }), _dec4 = property({
        type: Sprite
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Button
      }), _dec8 = property({
        type: Sprite
      }), _dec(_class = (_class2 = (_temp = class MainController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgList", _descriptor, this);

          _initializerDefineProperty(this, "titleSprite", _descriptor2, this);

          _initializerDefineProperty(this, "gameOverSprite", _descriptor3, this);

          _initializerDefineProperty(this, "pipeGroupPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "pipeContainerNode", _descriptor5, this);

          _initializerDefineProperty(this, "startButton", _descriptor6, this);

          _initializerDefineProperty(this, "birdSprite", _descriptor7, this);

          _defineProperty(this, "_bgPosition", new Vec3());

          _defineProperty(this, "_pipeList", [null, null, null]);

          _defineProperty(this, "_gameState", GAME_STATE.GS_READY);
        }

        set gameState(value) {
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

        update(deltaTime) {
          if (this.gameState === GAME_STATE.GS_PLAYING) {
            for (let i = 0; i < this.bgList.length; i++) {
              const bg = this.bgList[i];
              this._bgPosition = bg.node.getPosition();
              this._bgPosition.x -= 1;

              if (this._bgPosition.x <= -288) {
                this._bgPosition.x = 288;
              }

              bg.node.setPosition(this._bgPosition);
            } // move pipes


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


        gameStart() {
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


        gameOver() {
          this.gameOverSprite.node.active = true;
          this.startButton.node.active = true;
          this.gameState = GAME_STATE.GS_END;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [null, null];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameOverSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pipeGroupPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pipeContainerNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "startButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "birdSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MainController.js.map