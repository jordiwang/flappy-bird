// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({ type: cc.Sprite })
    sprite: cc.Sprite | null = null;

    skinId: number = 0;

    start() {
        // Your initialization goes here.
    }

    change() {
        const skins = ['meier', 'meisan', 'meiyi'];
        this.skinId = (this.skinId + 1) % skins.length;
        const name = skins[this.skinId];
        const url = `${name}`;
        cc.resources.load(url, cc.SpriteFrame, null, (err, spriteFrame) => {
            this.sprite.spriteFrame = spriteFrame;
        });

    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
