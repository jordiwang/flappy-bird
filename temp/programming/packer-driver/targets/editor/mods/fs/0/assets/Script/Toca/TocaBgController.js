System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, Node, _dec, _class, _temp, _crd, ccclass, property, TocaBgController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c7ea9itJdIpaBPgsHWXQdq", "TocaBgController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("TocaBgController", TocaBgController = (_dec = ccclass('TocaBgController'), _dec(_class = (_temp = class TocaBgController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_curPos", new Vec3());

          _defineProperty(this, "_targetPos", new Vec3());

          _defineProperty(this, "_startX", void 0);

          _defineProperty(this, "_deltaX", void 0);

          _defineProperty(this, "_outerWidth", 512.5);
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        onTouchStart(touch) {
          this.node.getPosition(this._curPos);
          this._deltaX = 0;
          console.log('startTouch');
          this._startX = touch.getUILocation().x;
        }

        onTouchMove(touch) {
          this._deltaX = touch.getUILocation().x - this._startX;
          let targetX = this._curPos.x + this._deltaX;

          if (targetX > this._outerWidth) {
            targetX = this._outerWidth;
          } else if (targetX < -this._outerWidth) {
            targetX = -this._outerWidth;
          }

          this._targetPos.x = targetX;
        }

        update() {
          this.node.setPosition(this._targetPos);
        }

      }, _temp)) || _class));
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
//# sourceMappingURL=TocaBgController.js.map