cc.Class({
    extends: cc.Component,

    properties: {
        goblin: {
            type: sp.Skeleton,
            default: null,
        },
        goblingirl: {
            type: sp.Skeleton,
            default: null,
        }
    },

    start () {
        let parts = ["left-arm", "left-hand", "left-shoulder"];
        for (let i = 0; i < parts.length; i++) {
            let goblin = this.goblin.findSlot(parts[i]);
            let goblingirl = this.goblingirl.findSlot(parts[i]);
            let attachment = goblingirl.getAttachment();
            goblin.setAttachment(attachment);
        }
    }
});