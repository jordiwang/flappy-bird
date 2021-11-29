// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ABCBinding from '../../../abc-kit/lib/ABCBinding/ABCBinding';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    start() {}

    // update (dt) {}

    onTouchEnd() {
        ABCBinding.callNativeMethod('media.playSonglist', {
            song: [
                {
                    songid: '105856110',
                },
            ],
        }).then(res => {
            cc.log(JSON.stringify(res));
        });
    }
}
