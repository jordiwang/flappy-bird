// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    //Speed of bird
    speed: number = 0;


    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:


    onLoad() {
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    start() {

    }

    update(dt: number) {
        this.speed -= 0.05

        let position = this.node.getPosition()

        position.y += this.speed

        let angle = (this.speed / 2) * 30

        if (angle >= 30) {
            angle = 30
        }

        this.node.angle = (angle);
        this.node.setPosition(position);

    }


    onTouchStart(event: cc.Event.EventTouch) {

        console.log(';;;;;;;;;;;;;;;;');


        this.speed = 2;
    }
}
