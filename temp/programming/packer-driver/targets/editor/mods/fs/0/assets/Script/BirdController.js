System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, systemEvent, SystemEvent, Vec3, BoxCollider2D, Contact2DType, MainController, GAME_STATE, AudioController, AUDIO_TYPE, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BirdController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMainController(extras) {
    _reporterNs.report("MainController", "./MainController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_STATE(extras) {
    _reporterNs.report("GAME_STATE", "./MainController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioController(extras) {
    _reporterNs.report("AudioController", "./AudioController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAUDIO_TYPE(extras) {
    _reporterNs.report("AUDIO_TYPE", "./AudioController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Vec3 = _cc.Vec3;
      BoxCollider2D = _cc.BoxCollider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      MainController = _unresolved_2.MainController;
      GAME_STATE = _unresolved_2.GAME_STATE;
    }, function (_unresolved_3) {
      AudioController = _unresolved_3.AudioController;
      AUDIO_TYPE = _unresolved_3.AUDIO_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "162e3gWPNBDOJOhxec4Ctui", "BirdController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

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
      _export("BirdController", BirdController = (_dec = ccclass('BirdController'), _dec2 = property({
        type: _crd && MainController === void 0 ? (_reportPossibleCrUseOfMainController({
          error: Error()
        }), MainController) : MainController
      }), _dec3 = property({
        type: _crd && AudioController === void 0 ? (_reportPossibleCrUseOfAudioController({
          error: Error()
        }), AudioController) : AudioController
      }), _dec(_class = (_class2 = (_temp = class BirdController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "speed", 0);

          _defineProperty(this, "_currentPosition", new Vec3());

          _initializerDefineProperty(this, "mainController", _descriptor, this);

          _initializerDefineProperty(this, "audioController", _descriptor2, this);
        }

        onLoad() {
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
          this.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        start() {}

        update(deltaTime) {
          if (this.mainController.gameState === (_crd && GAME_STATE === void 0 ? (_reportPossibleCrUseOfGAME_STATE({
            error: Error()
          }), GAME_STATE) : GAME_STATE).GS_PLAYING) {
            this.speed -= 0.05;
            this._currentPosition = this.node.getPosition();
            this._currentPosition.y += this.speed;
            this.node.setPosition(this._currentPosition);
            let angle = this.speed / 2 * 30;

            if (angle <= -30) {
              angle = -30;
            }

            this.node.setRotationFromEuler(new Vec3(0, 0, angle));
          }
        }

        onTouchStart(touch, event) {
          this.speed = 2;
          this.audioController.playAudio((_crd && AUDIO_TYPE === void 0 ? (_reportPossibleCrUseOfAUDIO_TYPE({
            error: Error()
          }), AUDIO_TYPE) : AUDIO_TYPE).RISE);
        }

        onBeginContact() {
          this.mainController.gameOver();
          this.audioController.playAudio((_crd && AUDIO_TYPE === void 0 ? (_reportPossibleCrUseOfAUDIO_TYPE({
            error: Error()
          }), AUDIO_TYPE) : AUDIO_TYPE).COLLISION);
          setTimeout(() => {
            this.audioController.playAudio((_crd && AUDIO_TYPE === void 0 ? (_reportPossibleCrUseOfAUDIO_TYPE({
              error: Error()
            }), AUDIO_TYPE) : AUDIO_TYPE).END);
          }, 100);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BirdController.js.map