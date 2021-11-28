System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, Node, _dec, _class, _temp, _crd, ccclass, property, TocaBgController;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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

      _export("TocaBgController", TocaBgController = (_dec = ccclass('TocaBgController'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TocaBgController, _Component);

        function TocaBgController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_curPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_targetPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_startX", void 0);

          _defineProperty(_assertThisInitialized(_this), "_deltaX", void 0);

          _defineProperty(_assertThisInitialized(_this), "_outerWidth", 512.5);

          return _this;
        }

        var _proto = TocaBgController.prototype;

        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto.onTouchStart = function onTouchStart(touch) {
          this.node.getPosition(this._curPos);
          this._deltaX = 0;
          console.log('startTouch');
          this._startX = touch.getUILocation().x;
        };

        _proto.onTouchMove = function onTouchMove(touch) {
          this._deltaX = touch.getUILocation().x - this._startX;
          var targetX = this._curPos.x + this._deltaX;

          if (targetX > this._outerWidth) {
            targetX = this._outerWidth;
          } else if (targetX < -this._outerWidth) {
            targetX = -this._outerWidth;
          }

          this._targetPos.x = targetX;
        };

        _proto.update = function update() {
          this.node.setPosition(this._targetPos);
        };

        return TocaBgController;
      }(Component), _temp)) || _class));
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