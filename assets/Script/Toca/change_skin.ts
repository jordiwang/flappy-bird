// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({ type:sp.Skeleton })
     spine: sp.Skeleton | null = null;

     skinId: number = 0;

     start () {
         // Your initialization goes here.
     }

     change() {
         const skins =['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x=> `full-skins/${x}`);
         this.skinId = (this.skinId + 1) % skins.length;
         this.spine!.setSkin(skins[this.skinId]);
     }

     // update (deltaTime: number) {
     //     // Your update function goes here.
     // }
}
