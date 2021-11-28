System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, TocaMainController;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34e56KaL39JaoKS1v9Gids0", "TocaMainController", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = TocaMainController
       * DateTime = Fri Nov 26 2021 16:24:21 GMT+0800 (中国标准时间)
       * Author = pointpeng
       * FileBasename = TocaMainController.ts
       * FileBasenameNoExtension = TocaMainController
       * URL = db://assets/Script/Toca/TocaMainController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("TocaMainController", TocaMainController = (_dec = ccclass('TocaMainController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TocaMainController, _Component);

        function TocaMainController() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = TocaMainController.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return TocaMainController;
      }(Component)) || _class));
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
//# sourceMappingURL=TocaMainController.js.map