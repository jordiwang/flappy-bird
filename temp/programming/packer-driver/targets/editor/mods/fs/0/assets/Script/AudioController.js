System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, AudioSource, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, AUDIO_TYPE, AudioController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export("AUDIO_TYPE", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40763yxOWxIcpk9WaD3j8QR", "AudioController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = AudioController
       * DateTime = Fri Nov 26 2021 00:40:11 GMT+0800 (中国标准时间)
       * Author = jordiwang
       * FileBasename = AudioController.ts
       * FileBasenameNoExtension = AudioController
       * URL = db://assets/Script/AudioController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      (function (AUDIO_TYPE) {
        AUDIO_TYPE[AUDIO_TYPE["COLLISION"] = 0] = "COLLISION";
        AUDIO_TYPE[AUDIO_TYPE["END"] = 1] = "END";
        AUDIO_TYPE[AUDIO_TYPE["RISE"] = 2] = "RISE";
        AUDIO_TYPE[AUDIO_TYPE["SWOOTHING"] = 3] = "SWOOTHING";
      })(AUDIO_TYPE || _export("AUDIO_TYPE", AUDIO_TYPE = {}));

      _export("AudioController", AudioController = (_dec = ccclass('AudioController'), _dec2 = property({
        type: AudioSource
      }), _dec3 = property({
        type: AudioClip
      }), _dec4 = property({
        type: AudioClip
      }), _dec5 = property({
        type: AudioClip
      }), _dec6 = property({
        type: AudioClip
      }), _dec(_class = (_class2 = (_temp = class AudioController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "audioSource", _descriptor, this);

          _initializerDefineProperty(this, "collisionAudio", _descriptor2, this);

          _initializerDefineProperty(this, "endAudio", _descriptor3, this);

          _initializerDefineProperty(this, "riseAudio", _descriptor4, this);

          _initializerDefineProperty(this, "swoothingAudio", _descriptor5, this);
        }

        start() {// [3]
        }

        playAudio(audioType) {
          switch (audioType) {
            case AUDIO_TYPE.COLLISION:
              this.audioSource.playOneShot(this.collisionAudio);
              break;

            case AUDIO_TYPE.END:
              this.audioSource.playOneShot(this.endAudio);
              break;

            case AUDIO_TYPE.RISE:
              this.audioSource.playOneShot(this.riseAudio);
              break;

            case AUDIO_TYPE.SWOOTHING:
              this.audioSource.playOneShot(this.swoothingAudio);
              break;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "collisionAudio", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "endAudio", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "riseAudio", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "swoothingAudio", [_dec6], {
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
//# sourceMappingURL=AudioController.js.map