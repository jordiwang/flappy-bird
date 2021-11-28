System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Animation, Vec3, Vec2, _dec, _class, _temp, _crd, ccclass, property, BoxCatController;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a39dbL1XvhCZI2UAik+3TU/", "BoxCatController", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = BoxCatController
       * DateTime = Sun Nov 28 2021 17:32:50 GMT+0800 (中国标准时间)
       * Author = pointpeng
       * FileBasename = BoxCatController.ts
       * FileBasenameNoExtension = BoxCatController
       * URL = db://assets/Script/Toca/BoxCatController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("BoxCatController", BoxCatController = (_dec = ccclass('BoxCatController'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoxCatController, _Component);

        function BoxCatController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_animation", void 0);

          _defineProperty(_assertThisInitialized(_this), "_curPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_targetPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_startPos", new Vec2());

          return _this;
        }

        var _proto = BoxCatController.prototype;

        _proto.start = function start() {
          this._animation = this.node.getComponent(Animation);
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };

        _proto.onTouchStart = function onTouchStart(touch) {
          this._animation.play('BoxCat_1');

          this.node.getPosition(this._curPos);
          this._startPos = touch.getUILocation();
        };

        _proto.onTouchMove = function onTouchMove(touch) {
          var movePos = touch.getUILocation();
          this._targetPos.x = this._curPos.x + (movePos.x - this._startPos.x);
          this._targetPos.y = this._curPos.y + (movePos.y - this._startPos.y);
        };

        _proto.onTouchEnd = function onTouchEnd(touch) {
          console.log(touch.getUILocation().x);

          this._animation.play('BoxCat_2');
        };

        _proto.update = function update() {
          this.node.setPosition(this._targetPos);
        };

        return BoxCatController;
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
//# sourceMappingURL=BoxCatController.js.map