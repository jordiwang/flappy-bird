// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    @property(cc.Sprite)
    bgList: cc.Sprite[] = [null, null]

    @property(cc.Prefab)
    pipePrefab: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt: number) {
        // move the background node
        for (let i = 0; i < this.bgList.length; i++) {
            let bgPositoin = this.bgList[i].node.getPosition()

            bgPositoin.x -= 1.0

            if (bgPositoin.x <= -288) {
                bgPositoin.x = 288
            }

            this.bgList[i].node.setPosition(bgPositoin);

        }
    }
}
